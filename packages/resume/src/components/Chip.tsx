import styles from "./Chip.module.scss";

export type ChipProps = { href?: string; label: string };

export const Chip = ({ href, label }: ChipProps) =>
  href === undefined ? (
    <span className={styles.root}>{label}</span>
  ) : (
    <a className={styles.root} href={href}>
      {label}
    </a>
  );
