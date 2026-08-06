import type { ReactNode } from "react";

import { Ico } from "../components";
import { Reveal } from "./Reveal";
import styles from "./Section.module.scss";
import { Timelines } from "./Timelines";

export type SectionProps = { children: ReactNode; icon: string; id: string; title: string };

export const Section = ({ children, icon, id, title }: SectionProps) => (
  <section className={styles.root} id={id} style={{ viewTimelineName: Timelines.name(id) }}>
    <Reveal cn={styles.head} tag="header">
      <h2 className={styles.title}>
        <span className={styles.icon}>
          <Ico>{icon}</Ico>
        </span>
        {title}
      </h2>
    </Reveal>
    {children}
  </section>
);
