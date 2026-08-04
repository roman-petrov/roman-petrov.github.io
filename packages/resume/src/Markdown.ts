import { slug } from "github-slugger";

import type { Block, Contact, Entry, Fact, Section } from "./Content";
import type { SiteLink } from "./site/SiteOrder";

import { Content } from "./Content";
import { SiteIndex, SiteOrder } from "./site/SiteOrder";

type Part = Section & { label: string };

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

const stackSection = () => {
  const [skills, ...rest] = Content.facts;

  return {
    blocks: [
      { text: (skills.chips ?? []).map(chip).join(` · `), type: `text` as const },
      { items: rest.map(factLine), type: `list` as const },
    ],
    icon: Content.stack.icon,
    id: `stack`,
    title: Content.stack.title,
  };
};

const part = ({ id, label }: SiteLink): Part => ({
  ...(id === `stack` ? stackSection() : Content.section(id)),
  index: SiteIndex(id),
  label,
});

const parts = SiteOrder.map(part);

const headline = ({ icon, index, title }: Part) => `${index} ${icon} ${title}`;

const navLink = (item: Part) => `[${item.icon} ${item.label}](#${slug(headline(item))})`;

const section = (item: Part) =>
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
    parts.map(navLink).join(` · `),
    Content.meta.tagline,
    Content.contacts.map(contactLine).join(`\n`),
    actions,
    `---`,
    ...parts.map(section),
    `---`,
    chip(`// built with HTML, CSS and Bun`),
    `© ${Content.meta.name}`,
  ].join(`\n\n`)}\n`;

export const Markdown = { render };
