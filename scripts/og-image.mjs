import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "puppeteer";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sitePath = path.join(root, "dist", "index.html");
const outPath = path.join(root, "dist", "assets", "og.png");

/** Social preview: the hero of the built site at 1200x630. */
export async function renderOgImage() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--disable-dev-shm-usage", "--font-render-hinting=none"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
    await page.goto(pathToFileURL(sitePath).href, { waitUntil: "load", timeout: 30_000 });
    await page.evaluate(async () => {
      document.documentElement.classList.remove("js");
      await document.fonts.ready;
    });
    await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1200, height: 630 } });
  } finally {
    await browser.close();
  }

  return { outPath };
}

if (import.meta.main) {
  const { outPath: file } = await renderOgImage();
  console.log(`OG image written: ${file}`);
}
