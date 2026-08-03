/** Shared helpers to turn content strings into HTML. */

const HTML_ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };

export const escapeHtml = value => String(value).replace(/[&<>"]/g, char => HTML_ESCAPES[char]);

/** Renders the markdown subset used in content: `**bold**` and `[label](href)`. */
export function inline(text) {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_match, label, href) => `<a href="${href}">${label}</a>`);
}

const DEFAULT_NAMES = { pull: "pull", lead: "lead", label: "label", list: "bullets", text: "" };

const withClass = name => (name ? ` class="${name}"` : "");

/** Renders content blocks (text, lead-in, mono label, bullet list, pull quote). */
export function renderBlocks(blocks = [], names = {}) {
  const cls = { ...DEFAULT_NAMES, ...names };

  return blocks
    .map(block => {
      switch (block.type) {
        case "pull":
          return `<p${withClass(cls.pull)}>${inline(block.text)}</p>`;
        case "lead":
          return `<p${withClass(cls.lead)}>${inline(block.text)}</p>`;
        case "label":
          return `<p${withClass(cls.label)}>${inline(block.text)}</p>`;
        case "list":
          return [`<ul${withClass(cls.list)}>`, ...block.items.map(item => `<li>${inline(item)}</li>`), "</ul>"].join(
            "\n",
          );
        default:
          return `<p${withClass(cls.text)}>${inline(block.text)}</p>`;
      }
    })
    .join("\n");
}
