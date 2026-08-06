import type { Plugin } from "vite";

import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path, { relative } from "node:path";
import sirv from "sirv";
import { defineConfig } from "vite";
import sassDts from "vite-plugin-sass-dts";

import type { PageAssets } from "./src/PageAssets.ts";

import { Fonts } from "./src/Fonts.ts";

type PageModule = { render: (assets: PageAssets) => string };

const root = path.resolve(import.meta.dirname, `..`, `..`);
const content = path.join(root, `resume.yml`);
const dist = path.join(root, `dist`);
const src = path.join(import.meta.dirname, `src`);

const generateScopedName = (name: string, fileName: string) => {
  const seed = `${relative(import.meta.dirname, fileName)}${name}`;
  const hash = createHash(`sha256`).update(seed).digest(`base64url`).slice(0, 4);

  return `${name}_${hash}`;
};

const pluginYaml = (): Plugin => ({
  enforce: `pre`,
  load: async id =>
    id.endsWith(`.yml`) ? `export default ${JSON.stringify(Bun.YAML.parse(await readFile(id, `utf8`)))}` : undefined,
  name: `yaml`,
});

const pluginPage = (): Plugin => ({
  apply: `serve`,
  configureServer: server => {
    server.middlewares.use(`/assets`, sirv(path.join(dist, `assets`), { dev: true }));
    server.watcher.add([content, src]);
    server.watcher.on(`all`, (event, file) => {
      if (event !== `add` && event !== `change` && event !== `unlink`) {
        return;
      }

      const fromSrc = path.relative(src, file);
      const inSrc =
        fromSrc !== `` &&
        !fromSrc.startsWith(`..`) &&
        !path.isAbsolute(fromSrc) &&
        /\.(?:ts|tsx|scss|css)$/i.test(file);

      if (path.resolve(file).toLowerCase() === content.toLowerCase() || inSrc) {
        server.hot.send({ type: `full-reload` });
      }
    });
  },
  name: `page`,
  transformIndexHtml: {
    handler: async (html, { server }) => {
      if (server === undefined) {
        return html;
      }

      const { render } = (await server.ssrLoadModule(`/src/EntryPage.ts`)) as PageModule;

      return {
        html: render({ css: Fonts.css, script: `` }),
        tags: [{ attrs: { src: `/src/EntryDev.ts`, type: `module` }, injectTo: `head`, tag: `script` }],
      };
    },
    order: `pre`,
  },
});

export default defineConfig({
  build: { cssTarget: [`chrome120`, `edge120`, `firefox120`, `safari17`], outDir: dist, target: `esnext` },
  css: { modules: { generateScopedName, localsConvention: `camelCaseOnly` } },
  logLevel: `warn`,
  plugins: [
    pluginYaml(),
    pluginPage(),
    sassDts({ enabledMode: [`production`], esmExport: true, legacyFileFormat: true }),
  ],
  ssr: { noExternal: [`@cv/core`] },
});
