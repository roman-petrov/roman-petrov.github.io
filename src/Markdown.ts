import type { Block, Contact, Entry, Fact, Section } from "./Content";

import { Content } from "./Content";

const contactLine = ({ href, label, value }: Contact) =>
  href === undefined ? `- **${label}:** ${value}` : `- **${label}:** [${value}](${href})`;

const block = (item: Block) =>
  item.type === `list`
    ? item.items.map(entry => `- ${entry}`).join(`\n`)
    : item.type === `label`
      ? `**${item.text}:**`
      : item.text;

const entry = ({ blocks, date, link, title }: Entry) => {
  const dates = link === undefined ? `- **${date}**` : `- **${date}** · [${link.label}](${link.href})`;

  return [`### ${title}`, dates, ...blocks.map(block)].join(`\n\n`);
};

const section = ({ blocks, entries, title }: Section) =>
  [`## ${title}`, ...(entries === undefined ? (blocks ?? []).map(block) : entries.map(entry))].join(`\n\n`);

const fact = ({ chips, label, text }: Fact) =>
  [`## ${label}`, chips === undefined ? (text ?? ``) : chips.map(chip => `- ${chip}`).join(`\n`)].join(`\n\n`);

const render = () =>
  `${[
    `# ${Content.meta.name}`,
    Content.meta.role,
    `[Web version](${Content.meta.siteUrl}) · [PDF](${Content.meta.siteUrl}${Content.meta.pdf})`,
    `## Details`,
    Content.contacts.map(contactLine).join(`\n`),
    ...Content.facts.map(fact),
    `---`,
    ...Content.sections.map(section),
  ].join(`\n\n`)}\n`;

export const Markdown = { render };
