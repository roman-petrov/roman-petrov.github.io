/* eslint-disable @typescript-eslint/no-magic-numbers */

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const cn = (...parts: readonly (false | string | undefined)[]) => parts.filter(Boolean).join(` `).trim();

const px = (value: number) => `${String(value)}px`;

const ratio = (part: number, total: number) => (total === 0 ? 0 : part / total);

const round = (value: number, fractionDigits: number) => {
  const factor = 10 ** fractionDigits;

  return Math.round(value * factor) / factor;
};

export const _ = { clamp, cn, px, ratio, round };
