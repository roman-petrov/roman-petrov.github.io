import type { Entry, Section } from "../../Content";

import { type BlockClasses, Blocks, Cn, Ico, Inline } from "../index";
import card from "./PrintCard.module.scss";
import styles from "./PrintSection.module.scss";
import text from "./PrintText.module.scss";

export const PrintBlockClasses: BlockClasses = { label: text.label, lead: text.lead, list: text.list, pull: text.pull };

const PrintEntry = ({ blocks, current, date, link, title }: Entry) => (
  <article className={styles.entry}>
    <div className={styles.meta}>
      <p className={Cn(styles.date, current === true ? styles.isNow : undefined)}>{date}</p>
      {link === undefined ? undefined : (
        <a className={styles.link} href={link.href}>
          {link.label}
        </a>
      )}
    </div>
    <div className={styles.entryBody}>
      <h3 className={styles.entryTitle}>
        <Inline text={title} />
      </h3>
      <Blocks blocks={blocks} classes={PrintBlockClasses} />
    </div>
  </article>
);

export type PrintSectionProps = { section: Section };

export const PrintSection = ({ section }: PrintSectionProps) => (
  <section className={Cn(card.card, styles.root)}>
    <header className={styles.head}>
      <span aria-hidden="true" className={styles.index}>
        {section.index}
      </span>
      <h2 className={styles.title}>
        <Ico>{section.icon}</Ico>
        {` ${section.title}`}
      </h2>
    </header>
    <div className={Cn(styles.body, section.entries === undefined ? undefined : styles.timeline)}>
      {section.entries === undefined ? (
        <Blocks blocks={section.blocks ?? []} classes={PrintBlockClasses} />
      ) : (
        section.entries.map(entry => <PrintEntry {...entry} key={entry.title} />)
      )}
    </div>
  </section>
);
