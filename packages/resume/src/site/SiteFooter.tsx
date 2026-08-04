import { _ } from "@cv/core";

import { Content } from "../Content";
import styles from "./SiteFooter.module.scss";
import { SiteGithubAction } from "./SiteGithubAction";
import layout from "./SiteLayout.module.scss";
import { SitePdfAction } from "./SitePdfAction";
import text from "./SiteText.module.scss";

export const SiteFooter = () => (
  <footer className={styles.root}>
    <div className={_.cn(styles.inner, layout.wrap)}>
      <p className={_.cn(text.label, styles.label)}>{`// built with HTML, CSS and Bun`}</p>
      <div className={styles.actions}>
        <SitePdfAction />
        <SiteGithubAction />
      </div>
      <p className={styles.note}>{`© ${String(new Date().getFullYear())} ${Content.meta.name}`}</p>
    </div>
  </footer>
);
