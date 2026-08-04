import type { useSiteThemeToggleState } from "./SiteThemeToggle.state";

import { Ico } from "../components";
import styles from "./SiteThemeToggle.module.scss";

export type SiteThemeToggleViewProps = ReturnType<typeof useSiteThemeToggleState>;

export const SiteThemeToggleView = ({ icon, toggle }: SiteThemeToggleViewProps) => (
  <button className={styles.root} onClick={toggle} title="Switch theme" type="button">
    <Ico>{icon}</Ico>
  </button>
);
