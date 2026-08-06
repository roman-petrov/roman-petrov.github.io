import type { Section as SectionData } from "../Content";

import { Blocks, Lead } from "../components";
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
            <Lead date={entry.date} href={entry.href} roles={entry.roles} size="lg" title={entry.title} titleAs="h3" />
          </header>
          <Blocks blocks={entry.blocks} />
        </Reveal>
      ))}
    </ol>
  </Section>
);
