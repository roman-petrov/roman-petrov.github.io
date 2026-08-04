import type { Page } from "puppeteer";

import { pathToFileURL } from "node:url";
import puppeteer from "puppeteer";

const timeout = 30_000;
const sandboxArgs = process.env[`CI`] === undefined ? [] : [`--no-sandbox`, `--disable-setuid-sandbox`];

const open = async () => {
  const browser = await puppeteer.launch({
    args: [`--disable-dev-shm-usage`, `--font-render-hinting=none`, ...sandboxArgs],
    headless: true,
  });

  return { browser, page: await browser.newPage() };
};

const show = async (page: Page, file: string) => {
  await page.goto(pathToFileURL(file).href, { timeout, waitUntil: `load` });
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
};

export const Browser = { open, show };
