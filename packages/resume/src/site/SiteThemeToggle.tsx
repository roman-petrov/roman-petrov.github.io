import { useSiteThemeToggleState } from "./SiteThemeToggle.state";
import { SiteThemeToggleView } from "./SiteThemeToggle.view";

export const SiteThemeToggle = () => <SiteThemeToggleView {...useSiteThemeToggleState()} />;
