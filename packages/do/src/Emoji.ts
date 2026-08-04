const buggy = [`🛡️`, `🏗️`, `🖌️`];
const gap = String.raw`(?:\u001B\[[0-9;]*m)*`;

const pad = (text: string, emoji: string) =>
  text
    .replaceAll(new RegExp(String.raw`${emoji}(?!\s)(?=${gap}[\p{L}\p{N}])`, `gu`), `${emoji} `)
    .replaceAll(new RegExp(String.raw`${emoji} (?! )(?=${gap}[\p{L}\p{N}])`, `gu`), `${emoji}  `);

const fix = (text: string) => buggy.reduce(pad, text);

export const Emoji = { fix };
