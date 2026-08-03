import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { launchBrowser } from "./browser.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(root, "dist", "resume.html");
const outPath = path.join(root, "dist", "Roman_Petrov_CV.pdf");

/** Renders the built print sheet to PDF. Requires `bun run build` to have produced dist/resume.html. */
export async function printPdf() {
  const started = performance.now();

  const browser = await launchBrowser();

  try {
    const page = await browser.newPage();
    await page.emulateMediaType("print");
    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "load", timeout: 30_000 });
    await page.evaluate(async () => {
      await document.fonts.ready;
    });

    // Page gutters come from CSS @page { margin } — keep in sync with print.css
    await page.pdf({ path: outPath, printBackground: true, preferCSSPageSize: true });

    return { outPath, ms: Math.round(performance.now() - started) };
  } finally {
    await browser.close();
  }
}

if (import.meta.main) {
  const { outPath: file, ms } = await printPdf();
  console.log(`PDF written: ${file} (${ms}ms)`);
}
