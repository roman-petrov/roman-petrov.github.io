import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import * as prettier from "prettier";
import { build } from "vite";

import { Markdown } from "../src/Markdown";
import { Og } from "./Og";
import { Paths } from "./Paths";
import { Pdf } from "./Pdf";

/** Font weights copied from Fontsource packages into dist/assets/fonts. */
const fonts = [
  { family: `Inter Tight`, pkg: `inter-tight`, weights: [400, 500, 600, 700] },
  { family: `JetBrains Mono`, pkg: `jetbrains-mono`, weights: [400, 500] },
];

const assetFiles = [`photo.png`, `favicon.svg`];

type RenderModule = { render: () => string };

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

const outputs = (result: Awaited<ReturnType<typeof build>>) =>
  (Array.isArray(result) ? result : [result]).flatMap(item => (`output` in item ? item.output : []));

const cssFile = (chunks: { fileName: string }[]) => {
  const asset = chunks.find(chunk => chunk.fileName.endsWith(`.css`));

  if (asset === undefined) {
    throw new Error(`The bundle produced no stylesheet.`);
  }

  return asset.fileName;
};

/** Renders one page from its Vite bundle: the same bundle also emits the page stylesheet. */
const renderPage = async (entry: string, page: string, stylesheet: string) => {
  const outDir = path.join(Paths.build, entry);
  const result = await build({ build: { outDir, ssr: `src/${entry}.ts`, ssrEmitAssets: true } });

  await cp(path.join(outDir, cssFile(outputs(result))), path.join(Paths.assets, stylesheet));
  const module_ = (await import(pathToFileURL(path.join(outDir, `${entry}.js`)).href)) as RenderModule;
  await writeFile(page, module_.render(), `utf8`);
};

/** The client script is a classic script tag, so it is bundled on its own as an IIFE. */
const buildClientScript = async () => {
  const outDir = path.join(Paths.build, `Site`);
  await build({
    build: { lib: { entry: `src/Site.ts`, fileName: () => `site.js`, formats: [`iife`], name: `ResumeSite` }, outDir },
  });
  await cp(path.join(outDir, `site.js`), path.join(Paths.assets, `site.js`));
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
await step(`render site`, () => renderPage(`RenderSite`, Paths.site, `site.css`));
await step(`render print sheet`, () => renderPage(`RenderPrint`, Paths.print, `print.css`));
await step(`build client script`, buildClientScript);
await step(`write resume.md`, writeMarkdown);
const { ms } = await step(`render pdf`, Pdf.render);
await step(`render og image`, Og.render);

const kilobytes = Math.round(Bun.file(Paths.pdf).size / 1024);
console.log(`Done: dist/ ready (pdf ${String(kilobytes)} kB in ${String(ms)}ms)`);
