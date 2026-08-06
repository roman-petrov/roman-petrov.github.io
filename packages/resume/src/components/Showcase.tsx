import type { Product } from "../Content";

import styles from "./Blocks.module.scss";
import { Ico } from "./Ico";
import { Inline } from "./Inline";
import { TechChip } from "./TechChip";

export type ShowcaseProps = { item: Product };

export const Showcase = ({ item: { links, name, note, stack } }: ShowcaseProps) => (
  <div className={styles.showcase}>
    <h3 className={styles.title}>{name}</h3>
    {note.map((item, index) => (
      <p className={styles.note} key={index}>
        <Inline text={item} />
      </p>
    ))}
    <ul className={styles.links}>
      {links.map(({ href, icon, label }) => (
        <li key={href}>
          <a href={href}>
            <Ico>{icon}</Ico>
            {` ${label}`}
          </a>
        </li>
      ))}
    </ul>
    <ul className={styles.stack}>
      {stack.map(item => (
        <li key={item}>
          <TechChip cn={styles.chip} name={item} />
        </li>
      ))}
    </ul>
  </div>
);
