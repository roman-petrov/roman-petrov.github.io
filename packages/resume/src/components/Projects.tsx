import type { Project } from "../Content";

import { Inline } from "./Inline";

export type ProjectClasses = Partial<
  Record<`chip` | `head` | `name` | `note` | `project` | `projects` | `roles` | `stack`, string>
>;

export type ProjectsProps = { classes: ProjectClasses; items: Project[] };

export const Projects = ({ classes, items }: ProjectsProps) => (
  <ul className={classes.projects}>
    {items.map(({ href, name, note, roles, stack }) => (
      <li className={classes.project} key={name}>
        <p className={classes.head}>
          {href === undefined ? (
            <span className={classes.name}>{name}</span>
          ) : (
            <a className={classes.name} href={href}>
              {name}
            </a>
          )}
          <span className={classes.roles}>{roles.join(` · `)}</span>
        </p>
        {note === undefined ? undefined : (
          <p className={classes.note}>
            <Inline text={note} />
          </p>
        )}
        <ul className={classes.stack}>
          {stack.map(item => (
            <li className={classes.chip} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);
