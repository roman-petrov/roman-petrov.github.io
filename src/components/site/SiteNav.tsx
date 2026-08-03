import { Meta } from "../../Content";
import { Cn } from "../index";
import { SitePdfLink } from "./SiteActions";
import layout from "./SiteLayout.module.scss";
import styles from "./SiteNav.module.scss";
import { SiteOrder } from "./SiteOrder";

export const SiteNav = () => (
  <header className={styles.root}>
    <div className={Cn(styles.inner, layout.wrap)}>
      <a className={styles.brand} href="#top">
        <span aria-hidden="true" className={styles.mark}>
          RP
        </span>
        <span className={styles.name}>{Meta.name}</span>
      </a>
      <nav aria-label="Sections" className={styles.links}>
        {SiteOrder.map(({ id, label }) => (
          <a href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </nav>
      <SitePdfLink />
    </div>
  </header>
);
