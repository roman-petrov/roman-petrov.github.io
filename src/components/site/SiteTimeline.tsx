import type { Section } from "../../Content";

import { Blocks, Cn, Inline, Stagger } from "../index";
import { SiteBlockClasses } from "./SiteOrder";
import { SiteSection } from "./SiteSection";

export type SiteTimelineProps = { section: Section };

export const SiteTimeline = ({ section }: SiteTimelineProps) => (
  <SiteSection icon={section.icon} id={section.id} title={section.title}>
    <ol className={`track`}>
      {(section.entries ?? []).map((entry, index) => (
        <li className={`track-item reveal`} key={entry.title} style={Stagger(index)}>
          <div className={`track-meta`}>
            <p className={Cn(`track-date`, entry.current === true ? `is-now` : undefined)}>{entry.date}</p>
            {entry.link === undefined ? undefined : (
              <a className={`track-link`} href={entry.link.href}>
                {entry.link.label}
              </a>
            )}
          </div>
          <div className={`track-card glass`}>
            <h3 className={`card-title`}>
              <Inline text={entry.title} />
            </h3>
            <Blocks blocks={entry.blocks} classes={SiteBlockClasses} />
          </div>
        </li>
      ))}
    </ol>
  </SiteSection>
);
