import { Emoji } from "./Emoji";

const log = (text: string) => {
  const narrowEmoji =
    process.platform === `win32` && process.env[`TERM_PROGRAM`] === `vscode` && process.env[`GITHUB_ACTIONS`] !== `true`;

  process.stdout.write(narrowEmoji ? Emoji.fix(text) : text);
};

const logLine = (text: string) => {
  log(`${text}\n`);
};

export const Console = { log, logLine };
