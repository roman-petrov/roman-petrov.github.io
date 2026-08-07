import { _ } from "@cv/core";

import styles from "./Ico.module.scss";

export type IcoProps = { children: string; cn?: string };

export const Ico = ({ children, cn }: IcoProps) => (
  <span aria-hidden="true" className={_.cn(styles.root, cn)}>
    {children}
  </span>
);
