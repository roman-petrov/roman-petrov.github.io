import type { PageAssets } from "./PageAssets";

import "./theme/styles/main.scss";
import { Html } from "./Html";
import { Document } from "./page";

export const Render = (assets: PageAssets) => Html.document(Document, assets);
