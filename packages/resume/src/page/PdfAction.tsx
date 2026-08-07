import { Content } from "../Content";
import { Action } from "./Action";

export const PdfAction = () => (
  <Action download href={`./${Content.meta.pdf}`} icon="⬇" label="Download PDF" />
);
