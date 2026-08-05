import type { Fact } from "../Content";

import { Ico } from "./Ico";

export type FactsClasses = Partial<Record<`chip` | `chips` | `facts` | `group` | `label`, string>>;

export type FactsItemsProps = { items: Fact[] };

export type FactsProps = FactsItemsProps & { classes: FactsClasses };

export const Facts = ({ classes, items }: FactsProps) => (
  <div className={classes.facts}>
    {items.map(({ chips, icon, label }) => (
      <div className={classes.group} key={label}>
        <p className={classes.label}>
          <Ico>{icon}</Ico>
          {` ${label}`}
        </p>
        <ul className={classes.chips}>
          {chips.map(chip => (
            <li className={classes.chip} key={chip}>
              {chip}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
