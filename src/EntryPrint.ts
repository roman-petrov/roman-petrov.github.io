import "./theme/styles/print.scss";
import { Html } from "./Html";
import { PrintDocument } from "./print";

export const render = () => Html.document(PrintDocument);
