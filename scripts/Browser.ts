import puppeteer from "puppeteer";

const sandboxArgs = process.env[`CI`] === undefined ? [] : [`--no-sandbox`, `--disable-setuid-sandbox`];

const launch = () =>
  puppeteer.launch({ args: [`--disable-dev-shm-usage`, `--font-render-hinting=none`, ...sandboxArgs], headless: true });

export const Browser = { launch };
