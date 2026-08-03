import type { ReactNode } from "react";

import { Cn, Ico } from "../index";
import layout from "./SiteLayout.module.scss";
import motion from "./SiteMotion.module.scss";
import { SiteIndex } from "./SiteOrder";
import styles from "./SiteSection.module.scss";

export type SiteSectionProps = { children: ReactNode; icon: string; id: string; title: string };

export const SiteSection = ({ children, icon, id, title }: SiteSectionProps) => (
  <section className={Cn(styles.root, layout.wrap)} id={id}>
    <header className={Cn(styles.head, motion.reveal)}>
      <span aria-hidden="true" className={styles.index}>
        {SiteIndex(id)}
      </span>
      <h2 className={styles.title}>
        <Ico>{icon}</Ico>
        {` ${title}`}
      </h2>
      <span aria-hidden="true" className={styles.rule} />
    </header>
    {children}
  </section>
);
