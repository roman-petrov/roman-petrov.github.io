import { useSiteNavState } from "./SiteNav.state";
import { SiteNavView } from "./SiteNav.view";

export const SiteNav = () => <SiteNavView {...useSiteNavState()} />;
