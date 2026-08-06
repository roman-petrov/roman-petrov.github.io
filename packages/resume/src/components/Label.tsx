import { _ } from "@cv/core";

import styles from "./Label.module.scss";

export type LabelProps = { children: string; cn?: string };

export const Label = ({ children, cn }: LabelProps) => <p className={_.cn(styles.root, cn)}>{children}</p>;
