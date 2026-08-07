import type { PageAssets } from "@cv/resume";

import { Directory, File } from "@cv/core/node";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import * as prettier from "prettier";
import { build as viteBuild } from "vite";
import { z } from "zod";

import { Hash } from "./Hash";
import { Og } from "./Og";
import { Paths } from "./Paths";
import { Pdf } from "./Pdf";
import { Photo } from "./Photo";

type PreparedAssets = Omit<PageAssets, `script`>;
type RenderModule = { Render: (assets: PageAssets) => string };

const copyHashed = async (from: string, toDir: string, file: string) => {
  const data = await readFile(from);
  const hashed = Hash.file(file, data);

  await writeFile(path.join(toDir, hashed), data);

  return hashed;
};

const copyFavicon = async () => {
  const { Assets } = await import(`@cv/resume`);

  return copyHashed(path.join(Paths.srcAssets, Assets.favicon), Paths.assets, Assets.favicon);
};

const copyFonts = async () => {
  const { Fonts } = await import(`@cv/resume`);
  const fontsDir = path.join(Paths.assets, `fonts`);

  await Directory.ensure(fontsDir);

  const fonts = await Promise.all(
    Fonts.faces.map(({ file, pkg }) =>
      copyHashed(path.join(Paths.root, `node_modules`, pkg, `files`, file), fontsDir, file),
    ),
  );

  return { css: Fonts.css(fonts), fonts };
};

const writePrepared = async (assets: PreparedAssets) => {
  await File.write(Paths.pageAssets, `${JSON.stringify(assets, undefined, 2)}\n`);
};

const cssFile = (result: Awaited<ReturnType<typeof viteBuild>>) => {
  const chunks = (Array.isArray(result) ? result : [result]).flatMap(item => (`output` in item ? item.output : []));
  const asset = chunks.find(chunk => chunk.fileName.endsWith(`.css`));

  if (asset === undefined) {
    throw new Error(`The bundle produced no stylesheet.`);
  }

  return asset.fileName;
};

const renderPage = async (entry: string, page: string, assets: PageAssets) => {
  const outDir = path.join(Paths.build, entry);
  const result = await viteBuild({
    build: { emptyOutDir: true, outDir, ssr: `src/${entry}.ts`, ssrEmitAssets: true },
    root: Paths.resume,
  });

  const css = await File.read(path.join(outDir, cssFile(result)));
  const pageModule = (await import(pathToFileURL(path.join(outDir, `${entry}.js`)).href)) as RenderModule;

  await File.write(page, pageModule.Render({ ...assets, css: `${assets.css}\n\n${css}` }));
};

const buildScript = async () => {
  const outDir = path.join(Paths.build, `EntryTheme`);

  await viteBuild({
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
  await Directory.ensure(Paths.assets);

  const [favicon, photo, { css, fonts }] = await Promise.all([copyFavicon(), Photo.render(), copyFonts()]);
  const assets = { css, favicon, fonts, photo };

  await writePrepared(assets);

  return assets;
};

const build = async () => {
  await Directory.remove(Paths.dist);

  const prepared = await prepare();
  const assets = { ...prepared, script: await buildScript() };

  await renderPage(`EntryPage`, Paths.site, assets);
  await writeContent();
  await File.write(Paths.robots, `User-agent: *\nAllow: /\n`);
  await Pdf.render();
  await Og.render();

  return { exitCode: 0, output: `` };
};

export const Resume = { build, prepare };
