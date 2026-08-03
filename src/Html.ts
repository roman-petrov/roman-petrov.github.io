import { createElement, type FunctionComponent } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const document = (component: FunctionComponent) =>
  `<!doctype html>\n${renderToStaticMarkup(createElement(component))}\n`;

export const Html = { document };
