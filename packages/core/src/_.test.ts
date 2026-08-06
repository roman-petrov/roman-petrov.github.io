/* eslint-disable @typescript-eslint/no-magic-numbers */
import { describe, expect, it } from "vitest";

import { _ } from "./_";

const { cn, max, round } = _;

describe(`cn`, () => {
  it(`joins non-empty strings with space`, () => {
    expect(cn(`a`, `b`, `c`)).toBe(`a b c`);
  });

  it(`filters out falsy and empty string`, () => {
    expect(cn(`a`, ``, undefined, `b`, false, `c`)).toBe(`a b c`);
  });

  it(`returns empty string when all falsy`, () => {
    expect(cn(undefined, ``, false)).toBe(``);
  });

  it(`trims leading and trailing space of result`, () => {
    expect(cn(`  a`, `b  `)).toBe(`a b`);
  });
});

describe(`max`, () => {
  it(`returns undefined for an empty array`, () => {
    expect(max([])).toBeUndefined();
  });

  it(`finds maximum in numeric array`, () => {
    expect(max([1, 2, 42, 3, 4, 5])).toBe(42);
  });

  it(`works for all-negative arrays`, () => {
    expect(max([-10, -3, -7])).toBe(-3);
  });
});

describe(`round`, () => {
  it(`rounds to two fraction digits`, () => {
    expect(round(10.126, 2)).toBe(10.13);
    expect(round(10.124, 2)).toBe(10.12);
  });

  it(`rounds to zero fraction digits`, () => {
    expect(round(41.6, 0)).toBe(42);
    expect(round(42.4, 0)).toBe(42);
  });

  it(`rounds negative values`, () => {
    expect(round(-10.126, 2)).toBe(-10.13);
  });
});
