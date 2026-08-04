import { _ } from "@cv/core";

import { Ico } from "../components";
import styles from "./SiteAction.module.scss";

export type SiteActionProps = {
  cn?: string;
  download?: boolean;
  href: string;
  icon: string;
  label: string;
  tone: `ghost` | `primary`;
};

export const SiteAction = ({ cn, download, href, icon, label, tone }: SiteActionProps) => (
  <a className={_.cn(styles.root, styles[tone], cn)} download={download} href={href}>
    <Ico>{icon}</Ico>
    {` ${label}`}
  </a>
);
