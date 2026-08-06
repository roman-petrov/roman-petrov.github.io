import { _ } from "@cv/core";

import { Ico } from "../components";
import styles from "./Action.module.scss";

export type ActionProps = {
  cn?: string;
  download?: boolean;
  href: string;
  icon: string;
  label: string;
  tone: `ghost` | `primary`;
};

export const Action = ({ cn, download, href, icon, label, tone }: ActionProps) => (
  <a className={_.cn(styles.root, styles[tone], cn)} download={download} href={href}>
    <Ico>{icon}</Ico>
    {` ${label}`}
  </a>
);
