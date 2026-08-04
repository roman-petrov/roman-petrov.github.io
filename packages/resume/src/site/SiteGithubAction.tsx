import { Content } from "../Content";
import { SiteAction } from "./SiteAction";

export type SiteGithubActionProps = { cn?: string };

export const SiteGithubAction = ({ cn }: SiteGithubActionProps) => (
  <SiteAction cn={cn} href={Content.meta.github} icon="🔗" label="GitHub" tone="ghost" />
);
