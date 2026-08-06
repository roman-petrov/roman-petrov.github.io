import type { Fact } from "../Content";

import { Chips } from "./Chips";
import styles from "./Facts.module.scss";
import { Label } from "./Label";

export type FactsProps = { items: Fact[] };

export const Facts = ({ items }: FactsProps) => (
  <div className={styles.root}>
    {items.map(({ chips, label, tech = false }) => (
      <div className={styles.group} key={label}>
        <Label>{label}</Label>
        <Chips items={chips} tech={tech} />
      </div>
    ))}
  </div>
);
