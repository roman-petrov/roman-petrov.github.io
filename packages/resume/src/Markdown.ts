import { slug } from "github-slugger";

import type { Block, Contact, Entry, Fact, Product, Project, Section } from "./Content";

import { Content } from "./Content";
import { TechLinks } from "./TechLinks";

const bullet = (text: string) => `- ${text}`;

const chip = (text: string) => `\`${text}\``;

const techChip = (name: string) => {
  const href = TechLinks.href(name);

  return href === undefined ? chip(name) : `[${chip(name)}](${href})`;
};

const paragraph = ({ text, type }: Extract<Block, { text: string }>) => (type === `label` ? `**${text}:**` : text);

const roleLine = (roles: string[]) => roles.map(chip).join(` ◆ `);

const projectItem = ({ href, name, note, roles, stack }: Project) => {
  const head = href === undefined ? `**${name}**` : `[${name}](${href})`;

  return [
    bullet(head),
    `\n  ${roleLine(roles)}\n`,
    ...note.map(item => `\n  ${item}\n`),
    `  ${stack.map(techChip).join(` · `)}`,
  ].join(`\n`);
};

const productCard = ({ links, name, note, stack }: Product) =>
  [
    `### ${name}`,
    ...note,
    links.map(({ href, icon, label }) => `${icon} [${label}](${href})`).join(` · `),
    stack.map(techChip).join(` · `),
  ].join(`\n\n`);

const factGroup = ({ chips, icon, label, tech = false }: Fact) =>
  [`### ${icon} ${label}`, chips.map(tech ? techChip : chip).join(` · `)].join(`\n\n`);

const block = (item: Block) =>
  item.type === `showcase`
    ? productCard(item.item)
    : item.type === `facts`
      ? item.items.map(factGroup).join(`\n\n`)
      : item.type === `projects`
        ? item.items.map(projectItem).join(`\n`)
        : item.type === `list`
          ? item.items.map(bullet).join(`\n`)
          : paragraph(item);

const entry = ({ blocks, date, href, roles, title }: Entry) => {
  const head = href === undefined ? `### ${title}` : `### [${title}](${href})`;

  return [head, chip(date), ...(roles === undefined ? [] : [roleLine(roles)]), ...blocks.map(block)].join(`\n\n`);
};

const contactLine = ({ href, icon, value }: Contact) =>
  bullet(`${icon} ${href === undefined ? value : `[${value}](${href})`}`);

const headline = ({ icon, title }: Section) => `${icon} ${title}`;

const navLink = (item: Section) => `[${headline(item)}](#${slug(headline(item))})`;

const section = (item: Section) =>
  [`## ${headline(item)}`, ...(item.entries ?? []).map(entry), ...(item.blocks ?? []).map(block)].join(`\n\n`);

const render = () =>
  `${[
    `# ${Content.meta.name}`,
    chip(`// ${Content.meta.role}: ${Content.meta.tagline}`),
    Content.sections.map(navLink).join(` · `),
    Content.contacts.map(contactLine).join(`\n`),
    [
      `[🌐 Web version](${Content.meta.site})`,
      `[⬇ Download PDF](${Content.meta.site}${Content.meta.pdf})`,
      `[🔗 GitHub](${Content.meta.github})`,
    ].join(` · `),
    `---`,
    ...Content.sections.map(section),
    `---`,
    `© ${Content.meta.name}`,
  ].join(`\n\n`)}\n`;

export const Markdown = { render };
