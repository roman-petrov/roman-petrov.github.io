import { slug } from "github-slugger";

import type { Block, Contact, Entry, Fact, Section } from "./Content";

import { Content } from "./Content";
import { SiteIndex, SiteOrder } from "./site/SiteOrder";

const bullet = (text: string) => `- ${text}`;

const chip = (text: string) => `\`${text}\``;

const paragraph = ({ text, type }: Extract<Block, { text: string }>) =>
  type === `pull` ? `> // ${text}` : type === `label` ? `**${text}:**` : text;

const block = (item: Block) => (item.type === `list` ? item.items.map(bullet).join(`\n`) : paragraph(item));

const entry = ({ blocks, date, link, title }: Entry) => {
  const rail = link === undefined ? chip(date) : `${chip(date)} · [${link.label}](${link.href})`;

  return [`### ${title}`, rail, ...blocks.map(block)].join(`\n\n`);
};

const contactLine = ({ href, icon, label, value }: Contact) =>
  bullet(`${icon} **${label}:** ${href === undefined ? value : `[${value}](${href})`}`);

const factLine = ({ icon, label, text }: Fact) => `${icon} **${label}:** ${text ?? ``}`;

const stackSection = (): Section => {
  const [skills, ...rest] = Content.facts;

  return {
    blocks: [
      { text: (skills?.chips ?? []).map(chip).join(` · `), type: `text` },
      { items: rest.map(factLine), type: `list` },
    ],
    icon: Content.stack.icon,
    id: `stack`,
    index: SiteIndex(`stack`),
    title: Content.stack.title,
  };
};

const ordered = SiteOrder.map(({ id }) => (id === `stack` ? stackSection() : Content.section(id)));

const headline = ({ icon, id, title }: Section) => `${SiteIndex(id)} ${icon} ${title}`;

const navLink = (item: Section) =>
  `[${item.icon} ${SiteOrder.find(link => link.id === item.id)?.label ?? ``}](#${slug(headline(item))})`;

const section = (item: Section) =>
  [`## ${headline(item)}`, ...(item.entries ?? []).map(entry), ...(item.blocks ?? []).map(block)].join(`\n\n`);

const actions = [
  `[🌐 Web version](${Content.meta.siteUrl})`,
  `[⬇ Download PDF](${Content.meta.siteUrl}${Content.meta.pdf})`,
  `[🔗 GitHub](${Content.meta.github})`,
].join(` · `);

const render = () =>
  `${[
    `# ${Content.meta.name}`,
    chip(`// ${Content.meta.role.toUpperCase()}`),
    ordered.map(navLink).join(` · `),
    Content.meta.tagline,
    Content.contacts.map(contactLine).join(`\n`),
    actions,
    `---`,
    ...ordered.map(section),
    `---`,
    chip(`// built with HTML, CSS and Bun`),
    `© ${Content.meta.name}`,
  ].join(`\n\n`)}\n`;

export const Markdown = { render };
