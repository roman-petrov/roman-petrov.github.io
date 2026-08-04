# ✍️ Emphasis

- **id:** `markdown/emphasis`
- **emoji:** ✍️
- **applies:** `**/*.{md,mdc}`

## 📐 Norm

- **Bold** for key terms/actions.
- _Italic_ for nuance/optional.
- `` `code` `` for file names, commands, identifiers.
- ~~Strikethrough~~ for deprecated.

## 🔍 Detect

- Paths/commands/identifiers written as plain prose without backticks.
- Key actions not bolded when surrounding docs use bold for them.

## 🔧 Fix

Apply the emphasis rules above.

## 📝 Examples

### ❌ Bad

Run npm install in packages/app.

### ✅ Good

Run `npm install` in `packages/app`.
