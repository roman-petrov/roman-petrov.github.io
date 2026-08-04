import { Browser } from "./Browser";
import { Paths } from "./Paths";

const render = async () => {
  const started = performance.now();
  const { browser, page } = await Browser.open();

  try {
    await page.emulateMediaType(`print`);
    await Browser.show(page, Paths.print);
    await page.pdf({ path: Paths.pdf, preferCSSPageSize: true, printBackground: true });

    return { ms: Math.round(performance.now() - started) };
  } finally {
    await browser.close();
  }
};

export const Pdf = { render };

if (import.meta.main) {
  const { ms } = await Pdf.render();
  console.log(`PDF written: ${Paths.pdf} (${String(ms)}ms)`);
}
