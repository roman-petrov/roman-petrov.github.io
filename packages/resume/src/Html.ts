import { createElement, type FunctionComponent } from "react";
import { renderToString } from "react-dom/server";

const document = (component: FunctionComponent) => `<!doctype html>\n${renderToString(createElement(component))}\n`;

export const Html = { document };
