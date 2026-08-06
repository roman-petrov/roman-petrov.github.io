import type { ActionProps } from "./Action";

import { Content } from "../Content";
import { Action } from "./Action";

export type PdfActionProps = Pick<ActionProps, `size`>;

export const PdfAction = ({ size }: PdfActionProps) => (
  <Action download href={`./${Content.meta.pdf}`} icon="⬇" label="Download PDF" size={size} tone="primary" />
);
