import type { ReactNode } from "react";

import { Ico } from "../components";
import { Content } from "../Content";
import { SiteReveal } from "./SiteReveal";
import styles from "./SiteSection.module.scss";

export type SiteSectionProps = { children: ReactNode; icon: string; id: string; title: string };

export const SiteSection = ({ children, icon, id, title }: SiteSectionProps) => (
  <section className={styles.root} id={id}>
    <SiteReveal cn={styles.head} tag="header">
      <span className={styles.index}>{Content.index(id)}</span>
      <h2 className={styles.title}>
        <Ico>{icon}</Ico>
        {` ${title}`}
      </h2>
      <span className={styles.rule} />
    </SiteReveal>
    {children}
  </section>
);
