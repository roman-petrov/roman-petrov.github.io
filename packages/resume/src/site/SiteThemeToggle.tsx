import { Ico } from "../components";
import styles from "./SiteThemeToggle.module.scss";

export const SiteThemeToggle = () => (
  <button className={styles.root} data-theme-toggle="" title="Switch theme" type="button">
    <Ico cn={styles.dark}>🌙</Ico>
    <Ico cn={styles.light}>☀️</Ico>
  </button>
);
