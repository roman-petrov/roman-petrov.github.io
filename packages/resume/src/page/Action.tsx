import { _ } from "@cv/core";

import { Ico } from "../components";
import styles from "./Action.module.scss";

export type ActionProps = { download?: boolean; href: string; icon: string; label: string };

export const Action = ({ download = false, href, icon, label }: ActionProps) => (
  <a className={_.cn(styles.root, styles.lg, styles.primary)} download={download} href={href}>
    <Ico>{icon}</Ico>
    <span>{label}</span>
  </a>
);
