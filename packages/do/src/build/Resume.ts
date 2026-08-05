import { Directory, File } from "@cv/core/node";
import path from "node:path";
import { pathToFileURL } from "node:url";
import * as prettier from "prettier";
import { build } from "vite";
import { z } from "zod";

import { Og } from "./Og";
import { Paths } from "./Paths";
import { Pdf } from "./Pdf";

type RenderModule = { render: () => string };

const copyAssets = async () => {
  const assetFiles = [`photo.png`, `favicon.svg`];

  await Directory.ensure(Paths.assets);
  await Promise.all(assetFiles.map(file => File.copy(path.join(Paths.srcAssets, file), path.join(Paths.assets, file))));
};

const copyFonts = async () => {
  const fonts = [
    { family: `Inter Tight`, pkg: `inter-tight`, weights: [`400`, `500`, `600`, `700`] },
    { family: `JetBrains Mono`, pkg: `jetbrains-mono`, weights: [`400`, `500`] },
  ];
  const fontsDir = path.join(Paths.assets, `fonts`);
  await Directory.ensure(fontsDir);
  const faces: string[] = [];

  for (const { family, pkg, weights } of fonts) {
    for (const weight of weights) {
      const file = `${pkg}-latin-${weight}-normal.woff2`;
      await File.copy(
        path.join(Paths.root, `node_modules`, `@fontsource`, pkg, `files`, file),
        path.join(fontsDir, file),
      );
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

  await File.write(path.join(Paths.assets, `fonts.css`), `${faces.join(`\n\n`)}\n`);
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

  await File.copy(path.join(outDir, cssFile(result)), path.join(Paths.assets, stylesheet));
  const module_ = (await import(pathToFileURL(path.join(outDir, `${entry}.js`)).href)) as RenderModule;
  await File.write(page, module_.render());
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
  await File.copy(path.join(outDir, `site.js`), path.join(Paths.assets, `site.js`));
};

const writeFormatted = async (file: string, text: string) => {
  const config = (await prettier.resolveConfig(file)) ?? {};
  await File.write(file, await prettier.format(text, { ...config, filepath: file }));
};

const checkContent = async () => {
  const { ResumeSchema } = await import(`@cv/resume`);
  const parsed = ResumeSchema.safeParse(Bun.YAML.parse(await File.read(Paths.content)));

  if (!parsed.success) {
    throw new Error(`Invalid resume.yml\n\n${z.prettifyError(parsed.error)}`);
  }
};

const writeContent = async () => {
  const { Markdown, ResumeSchema } = await import(`@cv/resume`);

  await writeFormatted(Paths.markdown, Markdown.render());
  await writeFormatted(Paths.schema, JSON.stringify(z.toJSONSchema(ResumeSchema)));
};

const run = async () => {
  await checkContent();
  await Directory.remove(Paths.dist);
  await copyAssets();
  await copyFonts();
  await renderPage(`EntrySite`, Paths.site, `site.css`);
  await renderPage(`EntryPrint`, Paths.print, `print.css`);
  await buildClientScript();
  await writeContent();
  await Pdf.render();
  await Og.render();

  return { exitCode: 0, output: `` };
};

export const Resume = { build: run };
