import type { useSiteNavState } from "./SiteNav.state";

import { Content } from "../Content";
import styles from "./SiteNav.module.scss";
import { SiteOrder } from "./SiteOrder";
import { SitePdfAction } from "./SitePdfAction";

export type SiteNavViewProps = ReturnType<typeof useSiteNavState>;

export const SiteNavView = ({ activeId }: SiteNavViewProps) => (
  <header className={styles.root}>
    <div className={styles.inner}>
      <a className={styles.brand} href="#top">
        <span className={styles.mark}>RP</span>
        <span className={styles.name}>{Content.meta.name}</span>
      </a>
      <nav className={styles.links}>
        {SiteOrder.map(({ id, label }) => (
          <a className={id === activeId ? styles.isActive : undefined} href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </nav>
      <SitePdfAction />
    </div>
  </header>
);
