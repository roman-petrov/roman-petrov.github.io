import { Markdown } from "@cv/resume";
import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import * as prettier from "prettier";
import { build } from "vite";

import { Og } from "./Og";
import { Paths } from "./Paths";
import { Pdf } from "./Pdf";

const fonts = [
  { family: `Inter Tight`, pkg: `inter-tight`, weights: [`400`, `500`, `600`, `700`] },
  { family: `JetBrains Mono`, pkg: `jetbrains-mono`, weights: [`400`, `500`] },
];

const assetFiles = [`photo.png`, `favicon.svg`];

type RenderModule = { render: () => string };

const copyAssets = async () => {
  await mkdir(Paths.assets, { recursive: true });
  await Promise.all(assetFiles.map(file => cp(path.join(Paths.srcAssets, file), path.join(Paths.assets, file))));
};

const copyFonts = async () => {
  const fontsDir = path.join(Paths.assets, `fonts`);
  await mkdir(fontsDir, { recursive: true });
  const faces: string[] = [];

  for (const { family, pkg, weights } of fonts) {
    for (const weight of weights) {
      const file = `${pkg}-latin-${weight}-normal.woff2`;
      await cp(path.join(Paths.root, `node_modules`, `@fontsource`, pkg, `files`, file), path.join(fontsDir, file));
      faces.push(
        [
          `@font-face {`,
          `  font-family: "${family}";`,
          `  font-style: normal;`,
          `  font-weight: ${weight};`,
          `  font-display: swap;`,
          `  src: url("./fonts/${file}") format("woff2");`,
          `}`,
        ].join(`\n`),
      );
    }
  }

  await writeFile(path.join(Paths.assets, `fonts.css`), `${faces.join(`\n\n`)}\n`, `utf8`);
};

const cssFile = (result: Awaited<ReturnType<typeof build>>) => {
  const chunks = (Array.isArray(result) ? result : [result]).flatMap(item => (`output` in item ? item.output : []));
  const asset = chunks.find(chunk => chunk.fileName.endsWith(`.css`));

  if (asset === undefined) {
    throw new Error(`The bundle produced no stylesheet.`);
  }

  return asset.fileName;
};

const renderPage = async (entry: string, page: string, stylesheet: string) => {
  const outDir = path.join(Paths.build, entry);
  const result = await build({
    build: { emptyOutDir: true, outDir, ssr: `src/${entry}.ts`, ssrEmitAssets: true },
    root: Paths.resume,
  });

  await cp(path.join(outDir, cssFile(result)), path.join(Paths.assets, stylesheet));
  const module_ = (await import(pathToFileURL(path.join(outDir, `${entry}.js`)).href)) as RenderModule;
  await writeFile(page, module_.render(), `utf8`);
};

const buildClientScript = async () => {
  const outDir = path.join(Paths.build, `EntryClient`);
  await build({
    build: {
      emptyOutDir: true,
      lib: { entry: `src/EntryClient.tsx`, fileName: () => `site.js`, formats: [`iife`], name: `ResumeSite` },
      outDir,
    },
    define: { "process.env.NODE_ENV": `"production"` },
    root: Paths.resume,
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

const run = async () => {
  await rm(Paths.dist, { force: true, recursive: true });
  await copyAssets();
  await copyFonts();
  await renderPage(`EntrySite`, Paths.site, `site.css`);
  await renderPage(`EntryPrint`, Paths.print, `print.css`);
  await buildClientScript();
  await writeMarkdown();
  await Pdf.render();
  await Og.render();

  return { exitCode: 0, output: `` };
};

export const Resume = { build: run };
