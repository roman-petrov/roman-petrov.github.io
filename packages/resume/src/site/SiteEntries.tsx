import type { Section } from "../Content";

import { Inline } from "../components";
import { SiteBlocks } from "./SiteBlocks";
import styles from "./SiteEntries.module.scss";
import { SiteReveal } from "./SiteReveal";
import { SiteSection } from "./SiteSection";

export type SiteEntriesProps = { section: Section };

export const SiteEntries = ({ section }: SiteEntriesProps) => (
  <SiteSection icon={section.icon} id={section.id} title={section.title}>
    <ol className={styles.root}>
      {(section.entries ?? []).map((entry, index) => (
        <SiteReveal cn={styles.entry} index={index} key={entry.title} tag="li">
          <p className={styles.meta}>
            <span className={styles.date}>{entry.date}</span>
            {entry.link === undefined ? undefined : (
              <a className={styles.link} href={entry.link.href}>
                {entry.link.label}
              </a>
            )}
          </p>
          <h3 className={styles.title}>
            <Inline text={entry.title} />
          </h3>
          <SiteBlocks blocks={entry.blocks} />
        </SiteReveal>
      ))}
    </ol>
  </SiteSection>
);
