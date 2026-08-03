import "./styles/site/index.scss";
import { SiteDocument } from "./components/site";
import { Html } from "./Html";

/** Build entry for the site: bundling it also produces dist/assets/site.css. */
export const render = () => Html.document(SiteDocument);
