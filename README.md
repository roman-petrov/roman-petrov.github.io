# Resume

[📄 CV](Roman_Petrov_CV.md) · [🌐 Live](https://roman-petrov.github.io/) ·
[⬇ PDF](https://roman-petrov.github.io/Roman_Petrov_CV.pdf)

CV as code: one [`resume.yml`](resume.yml) becomes a website, a PDF and Markdown, so all three always match.

- 🌐 **Site** — `TypeScript`, `React` and `SCSS` modules that `Vite` renders into one static page, with no framework
  left in the browser.
- 🖨️ **Print** — `Puppeteer` prints the PDF and the social image from that very page, so paper never diverges.
- 🚀 **Delivery** — `Bun` runs every build script, `GitHub Actions` publishes to `GitHub Pages`.

## 📋 Prerequisites

- ⌨️ [Cursor](https://cursor.com/) — install recommended workspace extensions.
- 📥 [Node.js](https://nodejs.org/) — version from [`.node-version`](.node-version).
- 📥 [Bun](https://bun.com/).

## 🚀 Quick start

- 📥 `git clone https://github.com/roman-petrov/roman-petrov.github.io.git` — Get the sources.
- ⚙️ `!setup.bat` — Prepare the repository for work.
- ⚡ `bun dev` — Open the site in the browser and start editing.

## 🔁 Workflow

- ⚡ `bun dev` — Work on the project with live updates in the browser.
- 🚀 `bun do run` — Preview the final result locally.
- ✅ `bun run ci` — Verify the whole repository before a push.
- 🛡️ `bun run lint` — Check code quality.
- 🧪 `bun run test` — Run tests.
- 🏗️ `bun run build` — Build the publishable files.

## 🧰 Maintenance

- ⚙️ `!setup.bat` — Prepare the repository for work.
- ✅ `!check.bat` — Make sure everything still works.
- 🧹 `!cleanup.bat` — Clean the repository.
- 📦 `!upgrade.bat` — Upgrade dependencies.
- 🔄 `!upgrade-actions.bat` — Upgrade GitHub Actions.
