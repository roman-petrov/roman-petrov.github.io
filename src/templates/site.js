import { contacts, facts, meta, sections } from "../content.js";
import { escapeHtml, inline, renderBlocks } from "./markup.js";

const BLOCK_NAMES = { pull: "pull", lead: "lead", label: "kicker", list: "bullets", text: "" };

/** Site order differs from the print sheet, so section numbers are derived from it. */
const NAV = [
  { id: "profile", label: "Profile" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "activities", label: "Activities" },
];

const numberFor = id => String(NAV.findIndex(item => item.id === id) + 1).padStart(2, "0");

const byId = id => sections.find(section => section.id === id);

const heroContact = ({ icon, label, value, href }) => {
  const body = `<span class="ico" aria-hidden="true">${icon}</span><span>${escapeHtml(value)}</span>`;
  return href
    ? `<li><a class="pill" href="${href}" aria-label="${escapeHtml(label)}">${body}</a></li>`
    : `<li><span class="pill" aria-label="${escapeHtml(label)}">${body}</span></li>`;
};

const sectionHead = ({ id, icon, title }) => `
        <header class="section-head reveal">
          <span class="section-index" aria-hidden="true">${numberFor(id)}</span>
          <h2 class="section-title"><span class="ico" aria-hidden="true">${icon}</span> ${escapeHtml(title)}</h2>
          <span class="section-rule" aria-hidden="true"></span>
        </header>`;

const trackItem = ({ date, current, link, title, blocks }, i) => `
            <li class="track-item reveal" style="--i: ${i}">
              <div class="track-meta">
                <p class="track-date${current ? " is-now" : ""}">${escapeHtml(date)}</p>
                ${link ? `<a class="track-link" href="${link.href}">${escapeHtml(link.label)}</a>` : ""}
              </div>
              <div class="track-card glass">
                <h3 class="card-title">${inline(title)}</h3>
                ${renderBlocks(blocks, BLOCK_NAMES)}
              </div>
            </li>`;

const timelineSection = id => {
  const section = byId(id);
  return `
      <section class="section" id="${id}">${sectionHead(section)}
        <ol class="track">${section.entries.map(trackItem).join("\n")}
        </ol>
      </section>`;
};

const profileSection = () => {
  const section = byId("profile");
  return `
      <section class="section" id="profile">${sectionHead(section)}
        <div class="prose reveal glass">
          ${renderBlocks(section.blocks, BLOCK_NAMES)}
        </div>
      </section>`;
};

const stackSection = () => {
  const [skills, ...rest] = facts;
  return `
      <section class="section" id="stack">${sectionHead({ id: "stack", icon: skills.icon, title: "Stack & interests" })}
        <div class="stack">
          <ul class="chips reveal">
${skills.chips.map((chip, i) => `            <li class="chip" style="--i: ${i}">${escapeHtml(chip)}</li>`).join("\n")}
          </ul>
          <div class="stack-aside">
${rest
  .map(
    ({ icon, label, text }, i) => `            <div class="mini glass reveal" style="--i: ${i}">
              <p class="kicker"><span class="ico" aria-hidden="true">${icon}</span> ${escapeHtml(label)}</p>
              <p class="mini-text">${inline(text)}</p>
            </div>`,
  )
  .join("\n")}
          </div>
        </div>
      </section>`;
};

/** Single-page site: dark theme, scroll reveals, PDF download. */
export function renderSite() {
  const ogImage = `${meta.siteUrl}assets/og.png`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(meta.name)} — ${escapeHtml(meta.role)}</title>
    <meta name="description" content="${escapeHtml(meta.tagline)}" />
    <meta name="theme-color" content="#0b1020" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(meta.name)} — ${escapeHtml(meta.role)}" />
    <meta property="og:description" content="${escapeHtml(meta.tagline)}" />
    <meta property="og:url" content="${meta.siteUrl}" />
    <meta property="og:image" content="${ogImage}" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" href="./assets/favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="./assets/fonts.css" />
    <link rel="stylesheet" href="./assets/site.css" />
    <!-- Reveal animations only apply when scripting is available. -->
    <script>
      document.documentElement.classList.add("js");
    </script>
    <script src="./assets/site.js" defer></script>
  </head>
  <body>
    <a class="skip" href="#profile">Skip to content</a>
    <div class="progress" aria-hidden="true"><span class="progress-bar"></span></div>

    <header class="nav">
      <div class="nav-inner">
        <a class="brand" href="#top">
          <span class="brand-mark" aria-hidden="true">RP</span>
          <span class="brand-name">${escapeHtml(meta.name)}</span>
        </a>
        <nav class="nav-links" aria-label="Sections">
${NAV.map(({ id, label }) => `          <a href="#${id}">${label}</a>`).join("\n")}
        </nav>
        <a class="btn btn-primary" href="./${meta.pdf}" download>
          <span class="ico" aria-hidden="true">⬇</span> Download PDF
        </a>
      </div>
    </header>

    <main>
      <section class="hero" id="top">
        <div class="hero-glow" data-parallax aria-hidden="true"></div>
        <div class="hero-inner">
          <div class="hero-text">
            <p class="hero-kicker"><span class="hero-slash">//</span> ${escapeHtml(meta.role)}<span class="caret" aria-hidden="true"></span></p>
            <h1 class="hero-name">${escapeHtml(meta.name)}</h1>
            <p class="hero-tagline">${escapeHtml(meta.tagline)}</p>
            <ul class="hero-contacts">
${contacts.map(contact => `              ${heroContact(contact)}`).join("\n")}
            </ul>
            <div class="hero-cta">
              <a class="btn btn-primary btn-lg" href="./${meta.pdf}" download>
                <span class="ico" aria-hidden="true">⬇</span> Download PDF
              </a>
              <a class="btn btn-ghost btn-lg" href="${meta.github}">
                <span class="ico" aria-hidden="true">🔗</span> GitHub
              </a>
            </div>
          </div>
          <figure class="hero-photo">
            <img src="./assets/${meta.photo}" alt="${escapeHtml(meta.name)}" width="320" height="320" />
          </figure>
        </div>
        <a class="scroll-cue" href="#profile" aria-label="Scroll to profile"><span aria-hidden="true"></span></a>
      </section>
${profileSection()}
${stackSection()}
${timelineSection("experience")}
${timelineSection("education")}
${timelineSection("activities")}
    </main>

    <footer class="footer">
      <div class="footer-inner">
        <p class="kicker">// built with HTML, CSS and Bun</p>
        <div class="footer-actions">
          <a class="btn btn-primary" href="./${meta.pdf}" download>
            <span class="ico" aria-hidden="true">⬇</span> Download PDF
          </a>
          <a class="btn btn-ghost" href="${meta.github}">
            <span class="ico" aria-hidden="true">🔗</span> GitHub
          </a>
        </div>
        <p class="footer-note">© ${new Date().getFullYear()} ${escapeHtml(meta.name)}</p>
      </div>
    </footer>
  </body>
</html>
`;
}
