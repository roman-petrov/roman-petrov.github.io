import { Content } from "../Content";
import { SiteAction } from "./SiteAction";

export type SitePdfActionProps = { cn?: string };

export const SitePdfAction = ({ cn }: SitePdfActionProps) => (
  <SiteAction cn={cn} download href={`./${Content.meta.pdf}`} icon="⬇" label="Download PDF" tone="primary" />
);
