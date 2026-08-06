import type { Project } from "../Content";

import { Chips } from "./Chips";
import { Inline } from "./Inline";
import { Lead } from "./Lead";
import styles from "./Projects.module.scss";

export type ProjectsProps = { items: Project[] };

export const Projects = ({ items }: ProjectsProps) => (
  <ul className={styles.root}>
    {items.map(({ href, name, note, roles, stack }) => (
      <li className={styles.project} key={name}>
        <Lead href={href} roles={roles} size="md" title={name} />
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
