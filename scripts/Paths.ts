import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), `..`);

export const Paths = {
  assets: path.join(root, `dist`, `assets`),
  build: path.join(root, `.build`),
  dist: path.join(root, `dist`),
  markdown: path.join(root, `README.md`),
  og: path.join(root, `dist`, `assets`, `og.png`),
  pdf: path.join(root, `dist`, `Roman_Petrov_CV.pdf`),
  print: path.join(root, `dist`, `resume.html`),
  root,
  site: path.join(root, `dist`, `index.html`),
  srcAssets: path.join(root, `src`, `assets`),
};
