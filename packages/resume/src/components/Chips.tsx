import { Chip } from "./Chip";
import styles from "./Chips.module.scss";
import { TechChip } from "./TechChip";

export type ChipsProps = { items: string[]; tech?: boolean };

export const Chips = ({ items, tech = false }: ChipsProps) => (
  <ul className={styles.root}>
    {items.map(item => (
      <li key={item}>{tech ? <TechChip name={item} /> : <Chip label={item} />}</li>
    ))}
  </ul>
);
