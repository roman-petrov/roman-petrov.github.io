import type { InlineProps } from "./Inline";

import { InlineLogic } from "./Inline.logic";

export const useInlineState = ({ text }: InlineProps) => {
  const tokens = InlineLogic.parse(text);

  return { tokens };
};
