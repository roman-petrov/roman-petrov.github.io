const cn = (...parts: readonly (false | string | undefined)[]) => parts.filter(Boolean).join(` `).trim();

const max = (values: readonly number[]) =>
  values.reduce<number | undefined>((best, value) => (best === undefined ? value : Math.max(best, value)), undefined);

const px = (value: number) => `${String(value)}px`;

const round = (value: number, fractionDigits: number) => {
  const base = 10;
  const factor = base ** fractionDigits;

  return Math.round(value * factor) / factor;
};

export const _ = { cn, max, px, round };
