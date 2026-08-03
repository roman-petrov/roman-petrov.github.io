import { contacts, facts, meta, sections } from "../content.js";
import { escapeHtml, inline, renderBlocks } from "./markup.js";

const BLOCK_NAMES = { pull: "pull", lead: "lead-in", label: "label", list: "bullets", text: "" };

const contactItem = ({ icon, label, value, href }) => `
          <li>
            <span class="ico" aria-hidden="true">${icon}</span>
            <span class="contact-label">${escapeHtml(label)}</span>
            ${
              href
                ? `<a class="contact-value" href="${href}">${escapeHtml(value)}</a>`
                : `<span class="contact-value">${escapeHtml(value)}</span>`
            }
          </li>`;

const factsRow = ({ icon, label, chips, text }) => `
        <div class="facts-row">
          <h2 class="facts-label"><span class="ico" aria-hidden="true">${icon}</span> ${escapeHtml(label)}</h2>
          ${
            chips
              ? `<ul class="chips">
${chips.map(chip => `            <li class="chip">${escapeHtml(chip)}</li>`).join("\n")}
          </ul>`
              : `<p class="facts-text">${inline(text)}</p>`
          }
        </div>`;

const entry = ({ date, current, link, title, blocks }) => `
          <article class="entry">
            <div class="entry-meta">
              <p class="entry-date${current ? " entry-date-now" : ""}">${escapeHtml(date)}</p>
              ${link ? `<a class="entry-link" href="${link.href}">${escapeHtml(link.label)}</a>` : ""}
            </div>
            <div class="entry-body">
              <h3 class="entry-title">${inline(title)}</h3>
              ${renderBlocks(blocks, BLOCK_NAMES)}
            </div>
          </article>`;

const section = ({ index, icon, title, blocks, entries }) => `
        <section class="card block">
          <header class="block-head">
            <span class="block-index" aria-hidden="true">${index}</span>
            <h2 class="block-title"><span class="ico" aria-hidden="true">${icon}</span> ${escapeHtml(title)}</h2>
          </header>
          <div class="block-body${entries ? " timeline" : ""}">
            ${entries ? entries.map(entry).join("\n") : renderBlocks(blocks, BLOCK_NAMES)}
          </div>
        </section>`;

/** Print sheet: the exact document that becomes the PDF. */
export function renderPrint() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(meta.name)} — ${escapeHtml(meta.role)}</title>
    <link rel="stylesheet" href="./assets/fonts.css" />
    <link rel="stylesheet" href="./assets/print.css" />
  </head>
  <body>
    <article class="page">
      <header class="hero">
        <div class="hero-id">
          <img class="photo" src="./assets/${meta.photo}" alt="${escapeHtml(meta.name)}" width="160" height="160" />
          <div class="hero-name">
            <h1 class="name">${escapeHtml(meta.name)}</h1>
            <p class="role">${escapeHtml(meta.role)}</p>
          </div>
        </div>
        <ul class="contacts">${contacts.map(contactItem).join("")}
        </ul>
      </header>

      <section class="card facts" aria-label="Skills, languages and hobbies">${facts.map(factsRow).join("")}
      </section>

      <main>${sections.map(section).join("\n")}
      </main>
    </article>
  </body>
</html>
`;
}
