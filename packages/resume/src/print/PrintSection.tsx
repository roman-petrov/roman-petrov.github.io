import type { Section } from "../Content";

import { Ico } from "../components";
import { PrintBlocks } from "./PrintBlocks";
import { PrintEntry } from "./PrintEntry";
import styles from "./PrintSection.module.scss";

export type PrintSectionProps = { index: number; section: Section };

export const PrintSection = ({ index, section }: PrintSectionProps) => (
  <section className={styles.root}>
    <header className={styles.head}>
      <span className={styles.index}>{String(index).padStart(2, `0`)}</span>
      <h2 className={styles.title}>
        <Ico>{section.icon}</Ico>
        {` ${section.title}`}
      </h2>
    </header>
    <div className={styles.body}>
      {section.entries === undefined ? (
        <PrintBlocks blocks={section.blocks ?? []} />
      ) : (
        section.entries.map(entry => <PrintEntry {...entry} key={entry.title} />)
      )}
    </div>
  </section>
);
