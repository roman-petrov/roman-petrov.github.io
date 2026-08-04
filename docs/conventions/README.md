# 📐 Conventions

Coding norms for this repository. Each norm is one **atom** (a small markdown file) under a **group**.

---

## 📁 Layout

- The root of `docs/conventions/` contains **only** this `README.md`.
- Every immediate subdirectory of `docs/conventions/` is a **group**.
- Every atom lives under a group: `docs/conventions/<group>/<kebab-name>.md`.
- Optional topic folders are allowed: `docs/conventions/<group>/<topic>/<kebab-name>.md` (e.g. `react/view-state/`).
- Do not put atoms, `_meta/`, or `bundles/` next to this README.

---

## 📄 Atom format

Each file:

```markdown
# 🗑️ Title

- **id:** `group/kebab-name` # or `group/topic/kebab-name`
- **emoji:** 🗑️
- **applies:** `<glob>` # or `*` for any file

## 📐 Norm

One clear rule.

## 🔍 Detect

How to find violations (grep / read). Do not rely on memory.

## 🔧 Fix

What to change.

## 📝 Examples

### ❌ Bad

### ✅ Good
```

- One concern per file; aim for ~15–60 lines of body.
- Language: **English**.
- **H1** — atom category emoji (same value as the `emoji` field), then the title.
- **`id`** — mirrors the path under `docs/conventions/` without `.md`.
- **`applies`** — which file paths the atom covers (`*` = any path).
- **Structure headings** — fixed in every atom (do not invent variants): `📐 Norm`, `🔍 Detect`, `🔧 Fix`,
  `📝 Examples`, `❌ Bad`, `✅ Good`.
- **Lists** — when Norm / Detect / Fix has 2+ points, use a bullet list (not a multi-clause paragraph).
- **`📝 Examples` optional** when Detect is behavioral/policy only (`N/A (behavioral)` / `N/A (policy)`). Otherwise
  include Bad/Good.
- When reporting a violation of an atom, use that atom’s `emoji` field — do not substitute another.

---

## ➕ Adding a convention

1. Add `docs/conventions/<existing-group>/<kebab-name>.md` (or `<group>/<topic>/<kebab-name>.md`) in the atom format.
2. Existing group — no other edits in this directory.

New **group**: add a subdirectory under `docs/conventions/` (the directory tree is the list of groups).
