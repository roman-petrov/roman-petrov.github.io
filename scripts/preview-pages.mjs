import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir } from 'node:fs/promises';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const htmlPath = path.join(root, 'src', 'resume.html');
const outDir = path.join(root, 'dist');

const pageHeight = 1123;
const pageWidth = 794;

async function main() {
  await mkdir(outDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--font-render-hinting=none'],
  });

  try {
    const page = await browser.newPage();
    await page.goto(pathToFileURL(htmlPath).href, {
      waitUntil: 'networkidle0',
      timeout: 60_000,
    });
    await page.evaluate(async () => {
      if (document.fonts?.ready) await document.fonts.ready;
    });
    await page.emulateMediaType('print');
    await page.setViewport({
      width: pageWidth,
      height: pageHeight,
      deviceScaleFactor: 2,
    });

    const height = await page.evaluate(() => document.documentElement.scrollHeight);
    const pages = Math.ceil(height / pageHeight);
    console.log(`print height=${height}px → ~${pages} pages`);

    for (let i = 0; i < pages; i++) {
      const file = path.join(outDir, `preview-p${i + 1}.png`);
      await page.screenshot({
        path: file,
        clip: { x: 0, y: i * pageHeight, width: pageWidth, height: pageHeight },
        captureBeyondViewport: true,
      });
      console.log(`wrote ${file}`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
