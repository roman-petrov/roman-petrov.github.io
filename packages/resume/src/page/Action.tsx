import { _ } from "@cv/core";

import { Ico } from "../components";
import styles from "./Action.module.scss";

export type ActionProps = {
  download?: boolean;
  href: string;
  icon: string;
  label: string;
  size?: `lg` | `md`;
  tone: `ghost` | `primary`;
};

export const Action = ({ download, href, icon, label, size = `md`, tone }: ActionProps) => (
  <a className={_.cn(styles.root, styles[size], styles[tone])} download={download} href={href}>
    <Ico>{icon}</Ico>
    {` ${label}`}
  </a>
);
