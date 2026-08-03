import puppeteer from "puppeteer";

// CI runners (Ubuntu 23.10+) block unprivileged user namespaces, so Chromium cannot start its sandbox there.
const SANDBOX_ARGS = process.env.CI ? ["--no-sandbox", "--disable-setuid-sandbox"] : [];

/** Chromium instance shared by the PDF and OG image renderers. */
export function launchBrowser() {
  return puppeteer.launch({
    headless: true,
    args: ["--disable-dev-shm-usage", "--font-render-hinting=none", ...SANDBOX_ARGS],
  });
}
