import { contacts, facts, meta, sections } from "../content.js";

const contactLine = ({ label, value, href }) =>
  href ? `- **${label}:** [${value}](${href})` : `- **${label}:** ${value}`;

const blockToMarkdown = block => {
  switch (block.type) {
    case "label":
      return `**${block.text}:**`;
    case "list":
      return block.items.map(item => `- ${item}`).join("\n");
    default:
      return block.text;
  }
};

// The meta line is a list item, not a paragraph, so it does not read as a heading (markdownlint MD036).
const entryToMarkdown = ({ date, link, title, blocks }) => {
  const meta = link ? `- **${date}** · [${link.label}](${link.href})` : `- **${date}**`;
  return [`### ${title}`, meta, ...(blocks ?? []).map(blockToMarkdown)].join("\n\n");
};

const sectionToMarkdown = ({ title, blocks, entries }) =>
  [`## ${title}`, ...(entries ? entries.map(entryToMarkdown) : blocks.map(blockToMarkdown))].join("\n\n");

const factToMarkdown = ({ label, chips, text }) =>
  [`## ${label}`, chips ? chips.map(chip => `- ${chip}`).join("\n") : text].join("\n\n");

/** Markdown mirror of the resume, kept in sync from the same content. */
export function renderMarkdown() {
  const parts = [
    `# ${meta.name}`,
    meta.role,
    `[Web version](${meta.siteUrl}) · [PDF](${meta.siteUrl}${meta.pdf})`,
    "## Details",
    contacts.map(contactLine).join("\n"),
    ...facts.map(factToMarkdown),
    "---",
    ...sections.map(sectionToMarkdown),
  ];

  return `${parts.join("\n\n")}\n`;
}
