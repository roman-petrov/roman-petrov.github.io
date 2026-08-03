import { pathToFileURL } from "node:url";

import { Browser } from "./Browser";
import { Paths } from "./Paths";

/** Renders the built print sheet to PDF. Requires `bun run build` to have produced dist/resume.html. */
const render = async () => {
  const started = performance.now();
  const browser = await Browser.launch();

  try {
    const page = await browser.newPage();
    await page.emulateMediaType(`print`);
    await page.goto(pathToFileURL(Paths.print).href, { timeout: 30_000, waitUntil: `load` });
    await page.evaluate(async () => {
      await document.fonts.ready;
    });

    // Page gutters come from CSS @page { margin } — keep in sync with print.css
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
