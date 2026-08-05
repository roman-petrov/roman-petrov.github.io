import type { Fact } from "../Content";

import { Ico } from "./Ico";
import { Inline } from "./Inline";

export type FactsClasses = Partial<Record<`chip` | `chips` | `facts` | `group` | `label` | `text`, string>>;

export type FactsItemsProps = { items: Fact[] };

export type FactsProps = FactsItemsProps & { classes: FactsClasses };

export const Facts = ({ classes, items }: FactsProps) => (
  <div className={classes.facts}>
    {items.map(({ chips, icon, label, text }) => (
      <div className={classes.group} key={label}>
        <p className={classes.label}>
          <Ico>{icon}</Ico>
          {` ${label}`}
        </p>
        {chips === undefined ? (
          <p className={classes.text}>
            <Inline text={text ?? ``} />
          </p>
        ) : (
          <ul className={classes.chips}>
            {chips.map(chip => (
              <li className={classes.chip} key={chip}>
                {chip}
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
);
