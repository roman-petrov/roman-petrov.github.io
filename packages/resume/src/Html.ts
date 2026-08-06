import { type ComponentType, createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const document = <TProps extends object>(component: ComponentType<TProps>, props: TProps) =>
  `<!doctype html>\n${renderToStaticMarkup(createElement(component, props))}\n`;

export const Html = { document };
