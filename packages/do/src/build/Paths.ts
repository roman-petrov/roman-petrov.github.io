import path from "node:path";

import { Root } from "../Root";

const resume = path.join(Root, `packages`, `resume`);
const assets = path.join(Root, `dist`, `assets`);
const build = path.join(Root, `.build`);
const content = path.join(Root, `resume.yml`);
const dist = path.join(Root, `dist`);
const markdown = path.join(Root, `Roman_Petrov_CV.md`);
const og = path.join(Root, `dist`, `assets`, `og.png`);
const pageAssets = path.join(Root, `dist`, `page-assets.json`);
const pdf = path.join(Root, `dist`, `Roman_Petrov_CV.pdf`);
const robots = path.join(Root, `dist`, `robots.txt`);
const root = Root;
const schema = path.join(Root, `resume.schema.json`);
const site = path.join(Root, `dist`, `index.html`);
const sitemap = path.join(Root, `dist`, `sitemap.xml`);
const llms = path.join(Root, `dist`, `llms.txt`);
const srcAssets = path.join(resume, `src`, `assets`);

export const Paths = {
  assets,
  build,
  content,
  dist,
  llms,
  markdown,
  og,
  pageAssets,
  pdf,
  resume,
  robots,
  root,
  schema,
  site,
  sitemap,
  srcAssets,
};
