import type { Section } from "../Content";

import { Blocks, Inline, Stagger } from "../components";
import { _ } from "../core";
import motion from "./SiteMotion.module.scss";
import { SiteSection } from "./SiteSection";
import surface from "./SiteSurface.module.scss";
import text from "./SiteText.module.scss";
import styles from "./SiteTimeline.module.scss";

export type SiteTimelineProps = { section: Section };

export const SiteTimeline = ({ section }: SiteTimelineProps) => (
  <SiteSection icon={section.icon} id={section.id} title={section.title}>
    <ol className={styles.root}>
      {(section.entries ?? []).map((entry, index) => (
        <li className={_.cn(styles.item, motion.reveal)} key={entry.title} style={Stagger(index)}>
          <div className={styles.meta}>
            <p className={_.cn(styles.date, entry.current === true && styles.isNow)}>{entry.date}</p>
            {entry.link === undefined ? undefined : (
              <a className={styles.link} href={entry.link.href}>
                {entry.link.label}
              </a>
            )}
          </div>
          <div className={_.cn(styles.card, surface.glass)}>
            <h3 className={styles.title}>
              <Inline text={entry.title} />
            </h3>
            <Blocks blocks={entry.blocks} classes={text} />
          </div>
        </li>
      ))}
    </ol>
  </SiteSection>
);
