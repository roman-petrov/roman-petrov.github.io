import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import * as prettier from "prettier";

import { Markdown } from "../src/Markdown";
import { Render } from "../src/Render";
import { Og } from "./Og";
import { Paths } from "./Paths";
import { Pdf } from "./Pdf";

/** Font weights copied from Fontsource packages into dist/assets/fonts. */
const fonts = [
  { family: `Inter Tight`, pkg: `inter-tight`, weights: [400, 500, 600, 700] },
  { family: `JetBrains Mono`, pkg: `jetbrains-mono`, weights: [400, 500] },
];

const assetFiles = [`print.css`, `site.css`, `photo.png`, `favicon.svg`];

const step = async <T>(label: string, task: () => Promise<T>) => {
  const started = performance.now();
  const result = await task();
  console.log(`  ${label} (${String(Math.round(performance.now() - started))}ms)`);

  return result;
};

const copyAssets = async () => {
  await mkdir(Paths.assets, { recursive: true });
  await Promise.all(assetFiles.map(file => cp(path.join(Paths.src, file), path.join(Paths.assets, file))));
};

const copyFonts = async () => {
  const fontsDir = path.join(Paths.assets, `fonts`);
  await mkdir(fontsDir, { recursive: true });
  const faces: string[] = [];

  for (const { family, pkg, weights } of fonts) {
    for (const weight of weights) {
      const file = `${pkg}-latin-${String(weight)}-normal.woff2`;
      await cp(path.join(Paths.root, `node_modules`, `@fontsource`, pkg, `files`, file), path.join(fontsDir, file));
      faces.push(
        [
          `@font-face {`,
          `  font-family: "${family}";`,
          `  font-style: normal;`,
          `  font-weight: ${String(weight)};`,
          `  font-display: swap;`,
          `  src: url("./fonts/${file}") format("woff2");`,
          `}`,
        ].join(`\n`),
      );
    }
  }

  await writeFile(path.join(Paths.assets, `fonts.css`), `${faces.join(`\n\n`)}\n`, `utf8`);
};

const buildClientScript = async () => {
  const built = await Bun.build({ entrypoints: [path.join(Paths.src, `Site.ts`)], minify: true, target: `browser` });
  const [output] = built.outputs;

  if (output === undefined) {
    throw new Error(`Client script build produced no output: ${built.logs.map(log => log.message).join(`\n`)}`);
  }

  await Bun.write(path.join(Paths.assets, `site.js`), output);
};

const writeHtml = async () => {
  await writeFile(Paths.site, Render.site(), `utf8`);
  await writeFile(Paths.print, Render.print(), `utf8`);
};

const writeMarkdown = async () => {
  const config = (await prettier.resolveConfig(Paths.markdown)) ?? {};
  const formatted = await prettier.format(Markdown.render(), {
    ...config,
    filepath: Paths.markdown,
    parser: `markdown`,
  });
  await writeFile(Paths.markdown, formatted, `utf8`);
};

console.log(`Building resume site…`);

await step(`clean dist`, () => rm(Paths.dist, { force: true, recursive: true }));
await step(`copy assets`, copyAssets);
await step(`copy fonts`, copyFonts);
await step(`build client script`, buildClientScript);
await step(`render html`, writeHtml);
await step(`write resume.md`, writeMarkdown);
const { ms } = await step(`render pdf`, Pdf.render);
await step(`render og image`, Og.render);

const kilobytes = Math.round(Bun.file(Paths.pdf).size / 1024);
console.log(`Done: dist/ ready (pdf ${String(kilobytes)} kB in ${String(ms)}ms)`);
