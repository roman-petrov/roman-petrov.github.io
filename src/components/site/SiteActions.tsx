import { Meta } from "../../Content";
import { Cn, Ico } from "../index";
import styles from "./SiteActions.module.scss";

export type SiteActionProps = { cn?: string };

export const SitePdfLink = ({ cn }: SiteActionProps) => (
  <a className={Cn(styles.root, styles.primary, cn)} download href={`./${Meta.pdf}`}>
    <Ico>⬇</Ico>
    {` Download PDF`}
  </a>
);

export const SiteGithubLink = ({ cn }: SiteActionProps) => (
  <a className={Cn(styles.root, styles.ghost, cn)} href={Meta.github}>
    <Ico>🔗</Ico>
    {` GitHub`}
  </a>
);

export const SiteActionSize = { lg: styles.lg };
