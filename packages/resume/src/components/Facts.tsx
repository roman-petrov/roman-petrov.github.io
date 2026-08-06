import type { Fact } from "../Content";

import { Chips } from "./Chips";
import styles from "./Facts.module.scss";
import { Ico } from "./Ico";

export type FactsProps = { items: Fact[] };

export const Facts = ({ items }: FactsProps) => (
  <div className={styles.root}>
    {items.map(({ chips, icon, label, tech = false }) => (
      <div className={styles.group} key={label}>
        <p className={styles.label}>
          <Ico>{icon}</Ico>
          {` ${label}`}
        </p>
        <Chips items={chips} tech={tech} />
      </div>
    ))}
  </div>
);
