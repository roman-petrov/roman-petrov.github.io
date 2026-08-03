import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const htmlPath = path.join(root, 'src', 'resume.html');
const outPath = path.join(root, 'dist', 'Roman_Petrov_CV.pdf');

async function main() {
  const { mkdir } = await import('node:fs/promises');
  await mkdir(path.dirname(outPath), { recursive: true });

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

    // Ensure web fonts are ready before print
    await page.evaluate(async () => {
      if (document.fonts?.ready) await document.fonts.ready;
    });

    await page.pdf({
      path: outPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    });

    console.log(`PDF written: ${outPath}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
