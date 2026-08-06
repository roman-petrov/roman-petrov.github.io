import type { Project } from "../Content";
import type { RolesClasses } from "./Roles";

import { Inline } from "./Inline";
import { Roles } from "./Roles";
import { TechChip } from "./TechChip";

export type ProjectClasses = Partial<
  Record<`chip` | `head` | `name` | `note` | `project` | `projects` | `stack`, string>
> &
  RolesClasses;

export type ProjectsProps = { classes: ProjectClasses; items: Project[] };

export const Projects = ({ classes, items }: ProjectsProps) => (
  <ul className={classes.projects}>
    {items.map(({ href, name, note, roles, stack }) => (
      <li className={classes.project} key={name}>
        <div className={classes.head}>
          {href === undefined ? (
            <span className={classes.name}>{name}</span>
          ) : (
            <a className={classes.name} href={href}>
              {name}
            </a>
          )}
          <Roles classes={classes} items={roles} />
        </div>
        {note.map((item, index) => (
          <p className={classes.note} key={index}>
            <Inline text={item} />
          </p>
        ))}
        <ul className={classes.stack}>
          {stack.map(item => (
            <li key={item}>
              <TechChip cn={classes.chip} name={item} />
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);
