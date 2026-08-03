import { Content } from "../Content";
import { _ } from "../core";
import layout from "./SiteLayout.module.scss";
import styles from "./SiteNav.module.scss";
import { SiteOrder } from "./SiteOrder";
import { SitePdfAction } from "./SitePdfAction";

export const SiteNav = () => (
  <header className={styles.root}>
    <div className={_.cn(styles.inner, layout.wrap)}>
      <a className={styles.brand} href="#top">
        <span className={styles.mark}>RP</span>
        <span className={styles.name}>{Content.meta.name}</span>
      </a>
      <nav className={styles.links}>
        {SiteOrder.map(({ id, label }) => (
          <a href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </nav>
      <SitePdfAction />
    </div>
  </header>
);
