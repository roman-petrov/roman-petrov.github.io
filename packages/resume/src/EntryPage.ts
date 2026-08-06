import type { PageAssets } from "./PageAssets";

import "./theme/styles/main.scss";
import { Html } from "./Html";
import { Document } from "./page";

export const render = (assets: PageAssets) => Html.document(Document, assets);
