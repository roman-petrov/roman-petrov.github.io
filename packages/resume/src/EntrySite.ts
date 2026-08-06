import type { PageAssets } from "./Page";

import "./theme/styles/site.scss";
import { Html } from "./Html";
import { SiteDocument } from "./site";

export const render = (assets: PageAssets) => Html.document(SiteDocument, assets);
