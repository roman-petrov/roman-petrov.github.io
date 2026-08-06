import { Ico } from "../components";
import styles from "./ThemeToggle.module.scss";

export const ThemeToggle = () => (
  <button className={styles.root} data-theme-toggle="" title="Switch theme" type="button">
    <Ico cn={styles.dark}>🌙</Ico>
    <Ico cn={styles.light}>☀️</Ico>
  </button>
);
