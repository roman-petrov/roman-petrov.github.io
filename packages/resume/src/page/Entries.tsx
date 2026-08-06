import type { Section as SectionData } from "../Content";

import { Blocks, Inline, Roles } from "../components";
import styles from "./Entries.module.scss";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export type EntriesProps = { section: SectionData };

export const Entries = ({ section }: EntriesProps) => (
  <Section icon={section.icon} id={section.id} title={section.title}>
    <ol className={styles.root}>
      {(section.entries ?? []).map((entry, index) => (
        <Reveal cn={styles.entry} index={index} key={entry.title} tag="li">
          <header className={styles.head}>
            <div className={styles.line}>
              <span className={styles.date}>{entry.date}</span>
              <h3 className={styles.title}>
                <Inline text={entry.title} />
              </h3>
              {entry.link === undefined ? undefined : (
                <span className={styles.source}>
                  <a className={styles.link} href={entry.link.href}>
                    {entry.link.label}
                  </a>
                </span>
              )}
            </div>
            {entry.roles === undefined ? undefined : <Roles items={entry.roles} size="sm" />}
          </header>
          <Blocks blocks={entry.blocks} />
        </Reveal>
      ))}
    </ol>
  </Section>
);
