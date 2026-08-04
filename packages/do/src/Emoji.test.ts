import { describe, expect, it } from "vitest";

import { Emoji } from "./Emoji";

const { fix } = Emoji;
const narrow = `🛡️`;
const regular = `🧪`;
const label = `Lint`;
const colored = (text: string) => `\u001B[36m${text}\u001B[0m`;

describe(`fix`, () => {
  it.each([
    { expected: `Alice`, input: `Alice`, name: `plain text` },
    { expected: `${regular} ${label}`, input: `${regular} ${label}`, name: `regular emoji` },
    { expected: `${narrow}  ${label}`, input: `${narrow}${label}`, name: `narrow emoji touching text` },
    { expected: `${narrow}  ${label}`, input: `${narrow} ${label}`, name: `narrow emoji with one space` },
    { expected: `${narrow}  ${label}`, input: `${narrow}  ${label}`, name: `narrow emoji with two spaces` },
    { expected: `${narrow}  ${colored(label)}`, input: `${narrow} ${colored(label)}`, name: `color codes in between` },
  ])(`$name`, ({ expected, input }) => {
    expect(fix(input)).toBe(expected);
  });
});
