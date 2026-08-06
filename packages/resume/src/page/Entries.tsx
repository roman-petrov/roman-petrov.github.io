import type { Section as SectionData } from "../Content";

import { Blocks, Lead } from "../components";
import styles from "./Entries.module.scss";
import { Section } from "./Section";

export type EntriesProps = { section: SectionData };

export const Entries = ({ section }: EntriesProps) => (
  <Section icon={section.icon} id={section.id} title={section.title}>
    <ol className={styles.root}>
      {(section.entries ?? []).map(entry => (
        <li className={styles.entry} key={entry.title}>
          <header className={styles.head}>
            <Lead date={entry.date} href={entry.href} roles={entry.roles} size="lg" title={entry.title} titleAs="h3" />
          </header>
          <Blocks blocks={entry.blocks} />
        </li>
      ))}
    </ol>
  </Section>
);
