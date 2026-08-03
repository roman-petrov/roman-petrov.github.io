import { Meta } from "../../Content";
import { Cn } from "../index";
import { SiteGithubLink, SitePdfLink } from "./SiteActions";
import styles from "./SiteFooter.module.scss";
import layout from "./SiteLayout.module.scss";
import text from "./SiteText.module.scss";

export const SiteFooter = () => (
  <footer className={styles.root}>
    <div className={Cn(styles.inner, layout.wrap)}>
      <p className={Cn(text.label, styles.label)}>{`// built with HTML, CSS and Bun`}</p>
      <div className={styles.actions}>
        <SitePdfLink />
        <SiteGithubLink />
      </div>
      <p className={styles.note}>{`© ${String(new Date().getFullYear())} ${Meta.name}`}</p>
    </div>
  </footer>
);
