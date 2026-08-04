import type { Plugin } from "vite";

import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { relative } from "node:path";
import { defineConfig } from "vite";
import sassDts from "vite-plugin-sass-dts";

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

export default defineConfig({
  build: { cssTarget: [`chrome120`, `edge120`, `firefox120`, `safari17`], target: `esnext` },
  css: { modules: { generateScopedName, localsConvention: `camelCaseOnly` } },
  logLevel: `warn`,
  plugins: [pluginYaml(), sassDts({ enabledMode: [`production`], esmExport: true, legacyFileFormat: true })],
  ssr: { noExternal: [`@cv/core`] },
});
