import type { ReactNode } from "react";

import styles from "./Button.module.scss";

export type ButtonProps = { children: ReactNode; download?: boolean; href: string; label: string; rel?: string };

export const Button = ({ children, download = false, href, label, rel }: ButtonProps) => (
  <a className={styles.root} download={download} href={href} rel={rel}>
    {children}
    <span>{label}</span>
  </a>
);
