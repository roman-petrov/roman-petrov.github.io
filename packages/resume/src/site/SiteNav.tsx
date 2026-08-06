import type { CSSProperties } from "react";

import { Content } from "../Content";
import styles from "./SiteNav.module.scss";
import { SitePdfAction } from "./SitePdfAction";
import { SiteThemeToggle } from "./SiteThemeToggle";
import { Timelines } from "./Timelines";

export const SiteNav = () => (
  <header className={styles.root}>
    <div className={styles.inner}>
      <a className={styles.brand} href="#top">
        <span className={styles.mark}>RP</span>
        <span className={styles.name}>{Content.meta.name}</span>
      </a>
      <nav className={styles.links}>
        {Content.sections.map(({ id, title }) => (
          <a href={`#${id}`} key={id} style={{ "--section-timeline": Timelines.name(id) } as CSSProperties}>
            {title}
          </a>
        ))}
      </nav>
      <div className={styles.actions}>
        <SiteThemeToggle />
        <SitePdfAction />
      </div>
    </div>
  </header>
);
