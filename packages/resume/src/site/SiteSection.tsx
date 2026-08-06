import type { ReactNode } from "react";

import { Ico } from "../components";
import { SiteReveal } from "./SiteReveal";
import styles from "./SiteSection.module.scss";
import { Timelines } from "./Timelines";

export type SiteSectionProps = { children: ReactNode; icon: string; id: string; title: string };

export const SiteSection = ({ children, icon, id, title }: SiteSectionProps) => (
  <section className={styles.root} id={id} style={{ viewTimelineName: Timelines.name(id) }}>
    <SiteReveal cn={styles.head} tag="header">
      <h2 className={styles.title}>
        <Ico>{icon}</Ico>
        {` ${title}`}
      </h2>
      <span className={styles.rule} />
    </SiteReveal>
    {children}
  </section>
);
