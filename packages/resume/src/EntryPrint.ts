import "./theme/styles/print.scss";
import { Html } from "./Html";
import { PrintDocument, type PrintDocumentProps } from "./print";

export const render = (assets: PrintDocumentProps) => Html.document(PrintDocument, assets);
