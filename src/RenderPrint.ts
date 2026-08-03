import "./styles/print/index.scss";
import { PrintDocument } from "./components/print";
import { Html } from "./Html";

/** Build entry for the print sheet: bundling it also produces dist/assets/print.css. */
export const render = () => Html.document(PrintDocument);
