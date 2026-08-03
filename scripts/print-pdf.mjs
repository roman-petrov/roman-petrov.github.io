import { pathToFileURL } from "node:url";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir } from "node:fs/promises";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const htmlPath = path.join(root, "src", "resume.html");
const outPath = path.join(root, "dist", "Roman_Petrov_CV.pdf");

async function main() {
  const started = performance.now();
  await mkdir(path.dirname(outPath), { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--disable-dev-shm-usage", "--font-render-hinting=none"],
  });

  try {
    const page = await browser.newPage();
    await page.emulateMediaType("print");
    await page.goto(pathToFileURL(htmlPath).href, {
      waitUntil: "load",
      timeout: 30_000,
    });

    await page.evaluate(async () => {
      await document.fonts.ready;
    });

    // Page gutters come from CSS @page { margin } — keep in sync with resume.css
    await page.pdf({
      path: outPath,
      printBackground: true,
      preferCSSPageSize: true,
    });

    const ms = Math.round(performance.now() - started);
    console.log(`PDF written: ${outPath} (${ms}ms)`);
  } finally {
    await browser.close();
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
