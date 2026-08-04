# 🗑️ Unused @use namespaces

- **id:** `unused/css-use-namespaces`
- **emoji:** 🗑️
- **applies:** `**/*.{scss,module.scss}`

## 📐 Norm

- `@use` namespaces never referenced as `alias.` must be removed.
- Ignore `as *`.

## 🔍 Detect

- List `@use` aliases.
- Grep `alias.` within the file.

## 🔧 Fix

Remove unused `@use` lines

## 📝 Examples

### ❌ Bad

`@use "tokens" as t;` with no `t.` usage

### ✅ Good

Remove the unused `@use`
