import type { Fact } from "../Content";

import { Chip } from "./Chip";
import { Ico } from "./Ico";
import { TechChip } from "./TechChip";

export type FactsClasses = Partial<Record<`chip` | `chips` | `facts` | `group` | `label`, string>>;

export type FactsItemsProps = { items: Fact[] };

export type FactsProps = FactsItemsProps & { classes: FactsClasses };

export const Facts = ({ classes, items }: FactsProps) => (
  <div className={classes.facts}>
    {items.map(({ chips, icon, label, tech = false }) => (
      <div className={classes.group} key={label}>
        <p className={classes.label}>
          <Ico>{icon}</Ico>
          {` ${label}`}
        </p>
        <ul className={classes.chips}>
          {chips.map(name => (
            <li key={name}>
              {tech ? <TechChip cn={classes.chip} name={name} /> : <Chip cn={classes.chip} label={name} />}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
