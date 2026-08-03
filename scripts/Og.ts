import { pathToFileURL } from "node:url";

import { Browser } from "./Browser";
import { Paths } from "./Paths";

const size = { height: 630, width: 1200 };
const timeout = 30_000;

const render = async () => {
  const browser = await Browser.launch();

  try {
    const page = await browser.newPage();
    await page.setViewport({ ...size, deviceScaleFactor: 1 });
    await page.goto(pathToFileURL(Paths.site).href, { timeout, waitUntil: `load` });
    await page.evaluate(async () => {
      await document.fonts.ready;
    });
    await page.screenshot({ clip: { ...size, x: 0, y: 0 }, path: Paths.og });
  } finally {
    await browser.close();
  }
};

export const Og = { render };

if (import.meta.main) {
  await Og.render();
  console.log(`OG image written: ${Paths.og}`);
}
