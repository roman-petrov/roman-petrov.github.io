import { slug } from "github-slugger";

import type { Block, Contact, Entry, Fact, Product, Project, Section } from "./Content";

import { Content } from "./Content";

const bullet = (text: string) => `- ${text}`;

const chip = (text: string) => `\`${text}\``;

const paragraph = ({ text, type }: Extract<Block, { text: string }>) =>
  type === `pull` ? `> // ${text}` : type === `label` ? `**${text}:**` : text;

const projectItem = ({ href, name, note: [lead, ...rest], roles, stack }: Project) =>
  [
    bullet(`${href === undefined ? `**${name}**` : `[${name}](${href})`}${lead === undefined ? `` : ` — ${lead}`}`),
    ...rest.map(item => `\n  ${item}\n`),
    `  - **Roles:** ${roles.join(` · `)}`,
    `  - **Stack:** ${stack.map(chip).join(` · `)}`,
  ].join(`\n`);

const productCard = ({ links, name, note, stack }: Product) =>
  [
    `### ${name}`,
    ...note,
    links.map(({ href, icon, label }) => `${icon} [${label}](${href})`).join(` · `),
    stack.map(chip).join(` · `),
  ].join(`\n\n`);

const block = (item: Block) =>
  item.type === `showcase`
    ? productCard(item.item)
    : item.type === `projects`
      ? item.items.map(projectItem).join(`\n`)
      : item.type === `list`
        ? item.items.map(bullet).join(`\n`)
        : paragraph(item);

const entry = ({ blocks, date, link, title }: Entry) => {
  const rail = link === undefined ? chip(date) : `${chip(date)} · [${link.label}](${link.href})`;

  return [`### ${title}`, rail, ...blocks.map(block)].join(`\n\n`);
};

const contactLine = ({ href, icon, label, value }: Contact) =>
  bullet(`${icon} **${label}:** ${href === undefined ? value : `[${value}](${href})`}`);

const factLine = ({ icon, label, text }: Fact) => `${icon} **${label}:** ${text ?? ``}`;

const stackBlocks = (): Block[] => {
  const [skills, ...rest] = Content.facts;

  return [
    { text: (skills.chips ?? []).map(chip).join(` · `), type: `text` },
    { items: rest.map(factLine), type: `list` },
  ];
};

const blocks = ({ blocks: own, id }: Section) => own ?? (id === `stack` ? stackBlocks() : []);

const headline = ({ icon, title }: Section) => `${icon} ${title}`;

const navLink = (item: Section) => `[${headline(item)}](#${slug(headline(item))})`;

const section = (item: Section) =>
  [`## ${headline(item)}`, ...(item.entries ?? []).map(entry), ...blocks(item).map(block)].join(`\n\n`);

const render = () =>
  `${[
    `# ${Content.meta.name}`,
    chip(`// ${Content.meta.role.toUpperCase()}`),
    Content.sections.map(navLink).join(` · `),
    Content.meta.tagline,
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
