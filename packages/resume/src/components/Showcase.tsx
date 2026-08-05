import type { Product } from "../Content";

import { Ico } from "./Ico";
import { Inline } from "./Inline";

export type ShowcaseClasses = Partial<Record<`chip` | `links` | `note` | `showcase` | `stack` | `title`, string>>;

export type ShowcaseProps = { classes: ShowcaseClasses; item: Product };

export const Showcase = ({ classes, item: { links, name, note, stack } }: ShowcaseProps) => (
  <div className={classes.showcase}>
    <h3 className={classes.title}>{name}</h3>
    {note.map((item, index) => (
      <p className={classes.note} key={index}>
        <Inline text={item} />
      </p>
    ))}
    <ul className={classes.links}>
      {links.map(({ href, icon, label }) => (
        <li key={href}>
          <a href={href}>
            <Ico>{icon}</Ico>
            {` ${label}`}
          </a>
        </li>
      ))}
    </ul>
    <ul className={classes.stack}>
      {stack.map(item => (
        <li className={classes.chip} key={item}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);
