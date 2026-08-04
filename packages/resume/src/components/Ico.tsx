import styles from "./Ico.module.scss";

export type IcoProps = { children: string };

export const Ico = ({ children }: IcoProps) => <span className={styles.root}>{children}</span>;
