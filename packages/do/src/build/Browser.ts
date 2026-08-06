import type { Page } from "puppeteer";

import { pathToFileURL } from "node:url";
import puppeteer from "puppeteer";

const open = async () => {
  const sandboxArgs = process.env[`CI`] === undefined ? [] : [`--no-sandbox`, `--disable-setuid-sandbox`];
  const browser = await puppeteer.launch({
    args: [`--disable-dev-shm-usage`, `--font-render-hinting=none`, ...sandboxArgs],
    headless: true,
  });

  const page = await browser.newPage();

  return { browser, page };
};

const show = async (page: Page, file: string) => {
  const timeout = 30_000;

  await page.goto(pathToFileURL(file).href, { timeout, waitUntil: `load` });
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
};

export const Browser = { open, show };
