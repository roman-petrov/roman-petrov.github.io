import { Content } from "../Content";
import { Action } from "./Action";

export type PdfActionProps = { size?: `lg` | `md` };

export const PdfAction = ({ size }: PdfActionProps) => (
  <Action download href={`./${Content.meta.pdf}`} icon="⬇" label="Download PDF" size={size} tone="primary" />
);
