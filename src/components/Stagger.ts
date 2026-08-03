import type { CSSProperties } from "react";

/** Feeds the reveal delay of an item to CSS: `transition-delay: calc(var(--i) * 70ms)`. */
export const Stagger = (index: number) => ({ "--i": index }) as CSSProperties;
