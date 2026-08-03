import styles from "./Ico.module.scss";

export type IcoProps = { children: string };

/** Decorative emoji: hidden from assistive tech, sized by the `--size-ico` token. */
export const Ico = ({ children }: IcoProps) => (
  <span aria-hidden="true" className={styles.root}>
    {children}
  </span>
);
