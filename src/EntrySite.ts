import "./theme/styles/site.scss";
import { Html } from "./Html";
import { SiteDocument } from "./site";

export const render = () => Html.document(SiteDocument);
