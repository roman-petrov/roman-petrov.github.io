import { Content } from "../Content";
import { Action } from "./Action";

export type GithubActionProps = { cn?: string };

export const GithubAction = ({ cn }: GithubActionProps) => (
  <Action cn={cn} href={Content.meta.github} icon="🔗" label="GitHub" tone="ghost" />
);
