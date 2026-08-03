import { createElement, type FunctionComponent } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { PrintDocument } from "./components/print";
import { SiteDocument } from "./components/site";

const document = (component: FunctionComponent) =>
  `<!doctype html>\n${renderToStaticMarkup(createElement(component))}\n`;

/** Static HTML for both outputs: the site and the print sheet the PDF is made of. */
export const Render = { print: () => document(PrintDocument), site: () => document(SiteDocument) };
