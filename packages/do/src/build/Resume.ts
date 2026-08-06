import type { PageAssets } from "@cv/resume";

import { Directory, File } from "@cv/core/node";
import path from "node:path";
import { pathToFileURL } from "node:url";
import * as prettier from "prettier";
import { build } from "vite";
import { z } from "zod";

import { Og } from "./Og";
import { Paths } from "./Paths";
import { Pdf } from "./Pdf";
import { Photo } from "./Photo";

type RenderModule = { render: (assets: PageAssets) => string };

const copyAssets = async () => {
  const assetFiles = [`favicon.svg`];

  await Directory.ensure(Paths.assets);
  await Promise.all(assetFiles.map(file => File.copy(path.join(Paths.srcAssets, file), path.join(Paths.assets, file))));
};

const copyFonts = async () => {
  const { Fonts } = await import(`@cv/resume`);
  const fontsDir = path.join(Paths.assets, `fonts`);

  await Directory.ensure(fontsDir);
  await Promise.all(
    Fonts.faces.map(({ file, pkg }) =>
      File.copy(path.join(Paths.root, `node_modules`, pkg, `files`, file), path.join(fontsDir, file)),
    ),
  );

  return Fonts.css;
};

const cssFile = (result: Awaited<ReturnType<typeof build>>) => {
  const chunks = (Array.isArray(result) ? result : [result]).flatMap(item => (`output` in item ? item.output : []));
  const asset = chunks.find(chunk => chunk.fileName.endsWith(`.css`));

  if (asset === undefined) {
    throw new Error(`The bundle produced no stylesheet.`);
  }

  return asset.fileName;
};

const renderPage = async (entry: string, page: string, assets: PageAssets) => {
  const outDir = path.join(Paths.build, entry);
  const result = await build({
    build: { emptyOutDir: true, outDir, ssr: `src/${entry}.ts`, ssrEmitAssets: true },
    root: Paths.resume,
  });

  const css = await File.read(path.join(outDir, cssFile(result)));
  const module_ = (await import(pathToFileURL(path.join(outDir, `${entry}.js`)).href)) as RenderModule;

  await File.write(page, module_.render({ css: `${assets.css}\n\n${css}`, script: assets.script }));
};

const buildScript = async () => {
  const outDir = path.join(Paths.build, `EntryTheme`);

  await build({
    build: {
      emptyOutDir: true,
      lib: { entry: `src/EntryTheme.ts`, fileName: () => `theme.js`, formats: [`iife`], name: `ResumeTheme` },
      outDir,
    },
    root: Paths.resume,
  });

  return File.read(path.join(outDir, `theme.js`));
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

const prepare = async () => {
  await checkContent();
  await copyAssets();
  await Photo.render();

  return copyFonts();
};

const run = async () => {
  await Directory.remove(Paths.dist);

  const assets = { css: await prepare(), script: await buildScript() };

  await renderPage(`EntryPage`, Paths.site, assets);
  await writeContent();
  await Pdf.render();
  await Og.render();

  return { exitCode: 0, output: `` };
};

export const Resume = { build: run, prepare };
