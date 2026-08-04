import { Browser } from "./Browser";
import { Paths } from "./Paths";

const render = async () => {
  const { browser, page } = await Browser.open();

  try {
    await page.emulateMediaType(`print`);
    await Browser.show(page, Paths.print);
    await page.pdf({ path: Paths.pdf, preferCSSPageSize: true, printBackground: true });
  } finally {
    await browser.close();
  }
};

export const Pdf = { render };
