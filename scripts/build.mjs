import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as prettier from "prettier";
import { renderMarkdown } from "../src/templates/markdown.js";
import { renderPrint } from "../src/templates/print.js";
import { renderSite } from "../src/templates/site.js";
import { printPdf } from "./print-pdf.mjs";
import { renderOgImage } from "./og-image.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "src");
const dist = path.join(root, "dist");
const assets = path.join(dist, "assets");
const fontsDir = path.join(assets, "fonts");

/** Font weights copied from Fontsource packages into dist/assets/fonts. */
const FONTS = [
  { family: "Inter Tight", pkg: "inter-tight", weights: [400, 500, 600, 700] },
  { family: "JetBrains Mono", pkg: "jetbrains-mono", weights: [400, 500] },
];

const step = async (label, task) => {
  const started = performance.now();
  const result = await task();
  console.log(`  ${label} (${Math.round(performance.now() - started)}ms)`);
  return result;
};

async function copyFonts() {
  await mkdir(fontsDir, { recursive: true });
  const faces = [];

  for (const { family, pkg, weights } of FONTS) {
    for (const weight of weights) {
      const file = `${pkg}-latin-${weight}-normal.woff2`;
      await cp(path.join(root, "node_modules", "@fontsource", pkg, "files", file), path.join(fontsDir, file));
      faces.push(
        [
          "@font-face {",
          `  font-family: "${family}";`,
          "  font-style: normal;",
          `  font-weight: ${weight};`,
          "  font-display: swap;",
          `  src: url("./fonts/${file}") format("woff2");`,
          "}",
        ].join("\n"),
      );
    }
  }

  await writeFile(path.join(assets, "fonts.css"), `${faces.join("\n\n")}\n`, "utf8");
}

async function copyAssets() {
  await mkdir(assets, { recursive: true });
  const files = ["print.css", "site.css", "site.js", "photo.png", "favicon.svg"];
  await Promise.all(files.map(file => cp(path.join(src, file), path.join(assets, file))));
}

async function writeMarkdown() {
  const file = path.join(root, "resume.md");
  const config = (await prettier.resolveConfig(file)) ?? {};
  const formatted = await prettier.format(renderMarkdown(), { ...config, filepath: file, parser: "markdown" });
  await writeFile(file, formatted, "utf8");
}

console.log("Building resume site…");

await step("clean dist", () => rm(dist, { recursive: true, force: true }));
await step("copy assets", copyAssets);
await step("copy fonts", copyFonts);
await step("render html", async () => {
  await writeFile(path.join(dist, "index.html"), renderSite(), "utf8");
  await writeFile(path.join(dist, "resume.html"), renderPrint(), "utf8");
});
await step("write resume.md", writeMarkdown);
const { ms: pdfMs } = await step("render pdf", printPdf);
await step("render og image", renderOgImage);

const size = (await readFile(path.join(dist, "Roman_Petrov_CV.pdf"))).byteLength;
console.log(`Done: dist/ ready (pdf ${Math.round(size / 1024)} kB in ${pdfMs}ms)`);
