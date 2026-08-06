const fix = (text: string) => {
  const pad = (value: string, emoji: string) => {
    const gap = String.raw`(?:\u001B\[[0-9;]*m)*`;

    return value
      .replaceAll(new RegExp(String.raw`${emoji}(?!\s)(?=${gap}[\p{L}\p{N}])`, `gu`), `${emoji} `)
      .replaceAll(new RegExp(String.raw`${emoji} (?! )(?=${gap}[\p{L}\p{N}])`, `gu`), `${emoji}  `);
  };

  const buggy = [`🛡️`, `🏗️`, `🖌️`];

  return buggy.reduce(pad, text);
};

export const Emoji = { fix };
