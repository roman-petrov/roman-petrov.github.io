import type { Fact } from "../Content";

import { Chip } from "./Chip";
import styles from "./Facts.module.scss";
import { Ico } from "./Ico";
import { TechChip } from "./TechChip";

export type FactsProps = { items: Fact[] };

export const Facts = ({ items }: FactsProps) => (
  <div className={styles.facts}>
    {items.map(({ chips, icon, label, tech = false }) => (
      <div className={styles.group} key={label}>
        <p className={styles.label}>
          <Ico>{icon}</Ico>
          {` ${label}`}
        </p>
        <ul className={styles.chips}>
          {chips.map(name => (
            <li key={name}>
              {tech ? <TechChip cn={styles.chip} name={name} /> : <Chip cn={styles.chip} label={name} />}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
