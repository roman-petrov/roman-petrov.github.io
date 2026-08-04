const cn = (...parts: readonly (false | string | undefined)[]) => parts.filter(Boolean).join(` `).trim();

const px = (value: number) => `${String(value)}px`;

export const _ = { cn, px };
