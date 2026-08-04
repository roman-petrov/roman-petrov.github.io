import type { ReactNode } from "react";

import { _ } from "@cv/core";

import { Ico } from "../components";
import layout from "./SiteLayout.module.scss";
import motion from "./SiteMotion.module.scss";
import { SiteIndex } from "./SiteOrder";
import styles from "./SiteSection.module.scss";

export type SiteSectionProps = { children: ReactNode; icon: string; id: string; title: string };

export const SiteSection = ({ children, icon, id, title }: SiteSectionProps) => (
  <section className={_.cn(styles.root, layout.wrap)} id={id}>
    <header className={_.cn(styles.head, motion.reveal)}>
      <span className={styles.index}>{SiteIndex(id)}</span>
      <h2 className={styles.title}>
        <Ico>{icon}</Ico>
        {` ${title}`}
      </h2>
      <span className={styles.rule} />
    </header>
    {children}
  </section>
);
