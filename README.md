# Resume

[📄 CV](Roman_Petrov_CV.md) · [🌐 Live](https://roman-petrov.github.io/) ·
[⬇ PDF](https://roman-petrov.github.io/Roman_Petrov_CV.pdf)

CV as code: site, PDF and Markdown from one [`resume.yml`](resume.yml).

## 📋 Prerequisites

- ⌨️ [Cursor](https://cursor.com/) — install recommended workspace extensions.
- 📥 [Node.js](https://nodejs.org/) — version from [`.node-version`](.node-version).
- 📥 [Bun](https://bun.com/).

## 🔄 Workflow

- ⚙️ `!setup.bat` — git long paths + `bun i`.
- ✅ `!check.bat` — setup + full CI.
- 🧹 `!cleanup.bat` — clean repository leftovers.
- 📦 `!upgrade.bat` — upgrade dependencies interactively.
- 🔄 `!upgrade-actions.bat` — upgrade GitHub Actions.

## 🌐 Local

- 🏗️ `bun run build` — site, print HTML, PDF, OG image, `Roman_Petrov_CV.md`.
- 👀 `bun run preview` — build and serve `dist` on port `4173`.
