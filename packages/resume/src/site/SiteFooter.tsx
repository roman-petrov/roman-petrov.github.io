import { Content } from "../Content";
import styles from "./SiteFooter.module.scss";
import { SiteGithubAction } from "./SiteGithubAction";
import { SitePdfAction } from "./SitePdfAction";

export const SiteFooter = () => (
  <footer className={styles.root}>
    <div className={styles.inner}>
      <div className={styles.actions}>
        <SitePdfAction />
        <SiteGithubAction />
      </div>
      <p className={styles.note}>{`© ${String(new Date().getFullYear())} ${Content.meta.name}`}</p>
    </div>
  </footer>
);
