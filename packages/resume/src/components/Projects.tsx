import type { Project } from "../Content";

import { Chips } from "./Chips";
import { Inline } from "./Inline";
import styles from "./Projects.module.scss";
import { Roles } from "./Roles";

export type ProjectsProps = { items: Project[] };

export const Projects = ({ items }: ProjectsProps) => (
  <ul className={styles.root}>
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
          <Roles items={roles} size="xs" />
        </div>
        {note.map((item, index) => (
          <p className={styles.note} key={index}>
            <Inline text={item} />
          </p>
        ))}
        <Chips items={stack} tech />
      </li>
    ))}
  </ul>
);
