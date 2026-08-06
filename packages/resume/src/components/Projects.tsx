import type { Project } from "../Content";

import styles from "./Blocks.module.scss";
import { Inline } from "./Inline";
import { Roles } from "./Roles";
import { TechChip } from "./TechChip";

export type ProjectsProps = { items: Project[] };

export const Projects = ({ items }: ProjectsProps) => (
  <ul className={styles.projects}>
    {items.map(({ href, name, note, roles, stack }) => (
      <li className={styles.project} key={name}>
        <div className={styles.head}>
          {href === undefined ? (
            <span className={styles.name}>{name}</span>
          ) : (
            <a className={styles.name} href={href}>
              {name}
            </a>
          )}
          <Roles classes={styles} items={roles} />
        </div>
        {note.map((item, index) => (
          <p className={styles.note} key={index}>
            <Inline text={item} />
          </p>
        ))}
        <ul className={styles.stack}>
          {stack.map(item => (
            <li key={item}>
              <TechChip cn={styles.chip} name={item} />
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);
