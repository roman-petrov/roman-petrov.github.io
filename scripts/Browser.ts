import puppeteer from "puppeteer";

// CI runners (Ubuntu 23.10+) block unprivileged user namespaces, so Chromium cannot start its sandbox there.
const sandboxArgs = process.env[`CI`] === undefined ? [] : [`--no-sandbox`, `--disable-setuid-sandbox`];

const launch = () =>
  puppeteer.launch({ args: [`--disable-dev-shm-usage`, `--font-render-hinting=none`, ...sandboxArgs], headless: true });

/** Chromium instance shared by the PDF and OG image renderers. */
export const Browser = { launch };
