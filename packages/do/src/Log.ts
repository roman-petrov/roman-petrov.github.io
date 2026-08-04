import { Emoji } from "./Emoji";

const paint = (code: string) => (text: string) => `\u001B[${code}m${text}\u001B[0m`;

const write = (text: string) => {
  const narrowEmoji = process.platform === `win32` && process.env[`TERM_PROGRAM`] === `vscode`;

  process.stdout.write(narrowEmoji ? Emoji.fix(text) : text);
};

const line = (text: string) => {
  write(`${text}\n`);
};

export const Log = { cyan: paint(`36`), dim: paint(`2`), green: paint(`32`), line, red: paint(`31`), write };
