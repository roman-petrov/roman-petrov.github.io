import path from "node:path";

import { Root } from "../Root";

const resume = path.join(Root, `packages`, `resume`);
const assets = path.join(Root, `dist`, `assets`);
const build = path.join(Root, `.build`);
const content = path.join(Root, `resume.yml`);
const dist = path.join(Root, `dist`);
const markdown = path.join(Root, `Roman_Petrov_CV.md`);
const og = path.join(Root, `dist`, `assets`, `og.png`);
const pdf = path.join(Root, `dist`, `Roman_Petrov_CV.pdf`);
const root = Root;
const schema = path.join(Root, `resume.schema.json`);
const site = path.join(Root, `dist`, `index.html`);
const srcAssets = path.join(resume, `src`, `assets`);

export const Paths = { assets, build, content, dist, markdown, og, pdf, resume, root, schema, site, srcAssets };
