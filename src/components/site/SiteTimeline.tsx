import type { Section } from "../../Content";

import { Blocks, Cn, Inline, Stagger } from "../index";
import { SiteBlockClasses } from "./SiteBlocks";
import motion from "./SiteMotion.module.scss";
import { SiteSection } from "./SiteSection";
import surface from "./SiteSurface.module.scss";
import styles from "./SiteTimeline.module.scss";

export type SiteTimelineProps = { section: Section };

export const SiteTimeline = ({ section }: SiteTimelineProps) => (
  <SiteSection icon={section.icon} id={section.id} title={section.title}>
    <ol className={styles.root}>
      {(section.entries ?? []).map((entry, index) => (
        <li className={Cn(styles.item, motion.reveal)} key={entry.title} style={Stagger(index)}>
          <div className={styles.meta}>
            <p className={Cn(styles.date, entry.current === true ? styles.isNow : undefined)}>{entry.date}</p>
            {entry.link === undefined ? undefined : (
              <a className={styles.link} href={entry.link.href}>
                {entry.link.label}
              </a>
            )}
          </div>
          <div className={Cn(styles.card, surface.glass)}>
            <h3 className={styles.title}>
              <Inline text={entry.title} />
            </h3>
            <Blocks blocks={entry.blocks} classes={SiteBlockClasses} />
          </div>
        </li>
      ))}
    </ol>
  </SiteSection>
);
