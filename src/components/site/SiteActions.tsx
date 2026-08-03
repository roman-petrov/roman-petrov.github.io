import { Meta } from "../../Content";
import { Cn, Ico } from "../index";

export type SiteActionProps = { cn?: string };

export const SitePdfLink = ({ cn }: SiteActionProps) => (
  <a className={Cn(`btn`, `btn-primary`, cn)} download href={`./${Meta.pdf}`}>
    <Ico>⬇</Ico>
    {` Download PDF`}
  </a>
);

export const SiteGithubLink = ({ cn }: SiteActionProps) => (
  <a className={Cn(`btn`, `btn-ghost`, cn)} href={Meta.github}>
    <Ico>🔗</Ico>
    {` GitHub`}
  </a>
);
