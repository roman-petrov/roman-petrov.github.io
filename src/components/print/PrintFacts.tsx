import { Facts } from "../../Content";
import { Cn, Ico, Inline } from "../index";
import card from "./PrintCard.module.scss";
import styles from "./PrintFacts.module.scss";

/** Skills, languages and hobbies as one compact card. */
export const PrintFacts = () => (
  <section aria-label="Skills, languages and hobbies" className={Cn(card.card, styles.root)}>
    {Facts.map(({ chips, icon, label, text }) => (
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
