import type { Block, Contact, Entry, Fact, Section } from "./Content";

import { Contacts, Facts, Meta, Sections } from "./Content";

const contactLine = ({ href, label, value }: Contact) =>
  href === undefined ? `- **${label}:** ${value}` : `- **${label}:** [${value}](${href})`;

const block = (item: Block) => {
  if (item.type === `list`) {
    return item.items.map(entry => `- ${entry}`).join(`\n`);
  }

  return item.type === `label` ? `**${item.text}:**` : item.text;
};

// The meta line is a list item, not a paragraph, so it does not read as a heading (markdownlint MD036).
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
    `# ${Meta.name}`,
    Meta.role,
    `[Web version](${Meta.siteUrl}) · [PDF](${Meta.siteUrl}${Meta.pdf})`,
    `## Details`,
    Contacts.map(contactLine).join(`\n`),
    ...Facts.map(fact),
    `---`,
    ...Sections.map(section),
  ].join(`\n\n`)}\n`;

/** Markdown mirror of the resume, kept in sync from the same content. */
export const Markdown = { render };
