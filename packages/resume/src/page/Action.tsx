import type { ReactNode } from "react";

import styles from "./Action.module.scss";

export type ActionProps = { children: ReactNode; download?: boolean; href: string; label: string; rel?: string };

export const Action = ({ children, download = false, href, label, rel }: ActionProps) => (
  <a className={styles.root} download={download} href={href} rel={rel}>
    {children}
    <span>{label}</span>
  </a>
);
