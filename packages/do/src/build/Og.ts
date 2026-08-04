import { Browser } from "./Browser";
import { Paths } from "./Paths";

const render = async () => {
  const size = { height: 630, width: 1200 };
  const { browser, page } = await Browser.open();

  try {
    await page.setViewport(size);
    await page.emulateMediaFeatures([{ name: `prefers-color-scheme`, value: `dark` }]);
    await Browser.show(page, Paths.site);
    await page.screenshot({ clip: { ...size, x: 0, y: 0 }, path: Paths.og });
  } finally {
    await browser.close();
  }
};

export const Og = { render };
