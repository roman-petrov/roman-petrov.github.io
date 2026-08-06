import type { Product } from "../Content";

import { Chips } from "./Chips";
import { Ico } from "./Ico";
import { Inline } from "./Inline";
import styles from "./Showcase.module.scss";

export type ShowcaseProps = { item: Product };

export const Showcase = ({ item: { links, name, note, stack } }: ShowcaseProps) => (
  <div className={styles.root}>
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
    <Chips items={stack} tech />
  </div>
);
