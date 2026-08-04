import type { InlineProps } from "./Inline";

import { InlineLogic } from "./Inline.logic";

export const useInlineState = ({ text }: InlineProps) => ({ tokens: InlineLogic.parse(text) });
