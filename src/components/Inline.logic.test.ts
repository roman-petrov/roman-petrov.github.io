import { describe, expect, it } from "vitest";

import { InlineLogic } from "./Inline.logic";

const { parse } = InlineLogic;

describe(`parse`, () => {
  it(`returns nothing for empty input`, () => {
    expect(parse(``)).toStrictEqual([]);
  });

  it(`returns one text token for input without markup`, () => {
    expect(parse(`Alice`)).toStrictEqual([{ text: `Alice`, type: `text` }]);
  });

  it(`reads bold spans`, () => {
    expect(parse(`**Alice**`)).toStrictEqual([{ text: `Alice`, type: `bold` }]);
  });

  it(`reads links`, () => {
    expect(parse(`[Alice](https://example.test)`)).toStrictEqual([
      { href: `https://example.test`, label: `Alice`, type: `link` },
    ]);
  });

  it(`keeps the text around markup`, () => {
    expect(parse(`Hi **Alice**, see [docs](https://example.test) now`)).toStrictEqual([
      { text: `Hi `, type: `text` },
      { text: `Alice`, type: `bold` },
      { text: `, see `, type: `text` },
      { href: `https://example.test`, label: `docs`, type: `link` },
      { text: ` now`, type: `text` },
    ]);
  });

  it(`emits no empty text token between adjacent markup`, () => {
    expect(parse(`**Alice****Bob**`)).toStrictEqual([
      { text: `Alice`, type: `bold` },
      { text: `Bob`, type: `bold` },
    ]);
  });

  it(`takes the shortest bold span`, () => {
    expect(parse(`**Alice** and **Bob**`)).toStrictEqual([
      { text: `Alice`, type: `bold` },
      { text: ` and `, type: `text` },
      { text: `Bob`, type: `bold` },
    ]);
  });

  it(`treats unbalanced markup as text`, () => {
    expect(parse(`**Alice`)).toStrictEqual([{ text: `**Alice`, type: `text` }]);
    expect(parse(`[Alice](https://example.test`)).toStrictEqual([
      { text: `[Alice](https://example.test`, type: `text` },
    ]);
  });

  it(`treats a link target with whitespace as text`, () => {
    expect(parse(`[Alice](https://example.test x)`)).toStrictEqual([
      { text: `[Alice](https://example.test x)`, type: `text` },
    ]);
  });
});
