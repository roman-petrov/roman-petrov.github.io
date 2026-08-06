import { Content } from "../Content";
import { Action } from "./Action";

export type GithubActionProps = { size?: `lg` | `md` };

export const GithubAction = ({ size }: GithubActionProps) => (
  <Action href={Content.meta.github} icon="🔗" label="GitHub" size={size} tone="ghost" />
);
