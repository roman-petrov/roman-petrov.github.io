import { Ico, Inline } from "../components";
import { Content } from "../Content";
import { _ } from "../core";
import card from "./PrintCard.module.scss";
import styles from "./PrintFacts.module.scss";

export const PrintFacts = () => (
  <section className={_.cn(card.root, styles.root)}>
    {Content.facts.map(({ chips, icon, label, text }) => (
      <div className={styles.row} key={label}>
        <h2 className={styles.label}>
          <Ico>{icon}</Ico>
          {` ${label}`}
        </h2>
        {chips === undefined ? (
          <p className={styles.text}>
            <Inline text={text ?? ``} />
          </p>
        ) : (
          <ul className={styles.chips}>
            {chips.map(chip => (
              <li className={styles.chip} key={chip}>
                {chip}
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </section>
);
