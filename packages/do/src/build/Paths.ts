import path from "node:path";

import { Root } from "../Root";

const resume = path.join(Root, `packages`, `resume`);

export const Paths = {
  assets: path.join(Root, `dist`, `assets`),
  build: path.join(Root, `.build`),
  dist: path.join(Root, `dist`),
  markdown: path.join(Root, `README.md`),
  og: path.join(Root, `dist`, `assets`, `og.png`),
  pdf: path.join(Root, `dist`, `Roman_Petrov_CV.pdf`),
  print: path.join(Root, `dist`, `resume.html`),
  resume,
  root: Root,
  site: path.join(Root, `dist`, `index.html`),
  srcAssets: path.join(resume, `src`, `assets`),
};
