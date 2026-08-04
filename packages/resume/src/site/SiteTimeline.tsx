import { _ } from "@cv/core";

import type { Section } from "../Content";

import { Inline } from "../components";
import { SiteBlocks } from "./SiteBlocks";
import { SiteReveal } from "./SiteReveal";
import { SiteSection } from "./SiteSection";
import styles from "./SiteTimeline.module.scss";

export type SiteTimelineProps = { section: Section };

export const SiteTimeline = ({ section }: SiteTimelineProps) => (
  <SiteSection icon={section.icon} id={section.id} title={section.title}>
    <ol className={styles.root}>
      {(section.entries ?? []).map((entry, index) => (
        <SiteReveal cn={styles.item} index={index} key={entry.title} tag="li">
          <div className={styles.meta}>
            <p className={_.cn(styles.date, entry.current === true && styles.isNow)}>{entry.date}</p>
            {entry.link === undefined ? undefined : (
              <a className={styles.link} href={entry.link.href}>
                {entry.link.label}
              </a>
            )}
          </div>
          <div className={styles.card}>
            <h3 className={styles.title}>
              <Inline text={entry.title} />
            </h3>
            <SiteBlocks blocks={entry.blocks} />
          </div>
        </SiteReveal>
      ))}
    </ol>
  </SiteSection>
);
