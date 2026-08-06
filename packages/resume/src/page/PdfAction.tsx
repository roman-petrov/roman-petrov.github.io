import { Content } from "../Content";
import { Action } from "./Action";

export type PdfActionProps = { cn?: string };

export const PdfAction = ({ cn }: PdfActionProps) => (
  <Action cn={cn} download href={`./${Content.meta.pdf}`} icon="⬇" label="Download PDF" tone="primary" />
);
