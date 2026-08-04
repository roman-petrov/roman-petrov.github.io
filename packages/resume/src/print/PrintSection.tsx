import { _ } from "@cv/core";

import type { Section } from "../Content";

import { Blocks, Ico } from "../components";
import card from "./PrintCard.module.scss";
import { PrintEntry } from "./PrintEntry";
import styles from "./PrintSection.module.scss";
import text from "./PrintText.module.scss";

export type PrintSectionProps = { section: Section };

export const PrintSection = ({ section }: PrintSectionProps) => (
  <section className={_.cn(card.root, styles.root)}>
    <header className={styles.head}>
      <span className={styles.index}>{section.index}</span>
      <h2 className={styles.title}>
        <Ico>{section.icon}</Ico>
        {` ${section.title}`}
      </h2>
    </header>
    <div className={styles.body}>
      {section.entries === undefined ? (
        <Blocks blocks={section.blocks ?? []} classes={text} />
      ) : (
        section.entries.map(entry => <PrintEntry {...entry} key={entry.title} />)
      )}
    </div>
  </section>
);
