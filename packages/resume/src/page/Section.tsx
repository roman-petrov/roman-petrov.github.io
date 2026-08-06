import type { ReactNode } from "react";

import { Ico } from "../components";
import styles from "./Section.module.scss";

export type SectionProps = { children: ReactNode; icon: string; id: string; title: string };

export const Section = ({ children, icon, id, title }: SectionProps) => (
  <section className={styles.root} id={id}>
    <header className={styles.head}>
      <h2 className={styles.title}>
        <span className={styles.icon}>
          <Ico>{icon}</Ico>
        </span>
        {title}
      </h2>
    </header>
    {children}
  </section>
);
