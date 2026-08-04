# 🎨 No raw var()

- **id:** `css/no-raw-var`
- **emoji:** 🎨
- **applies:** `**/*.{scss,module.scss}`

## 📐 Norm

Never read CSS custom properties with `var()` in component styles — use theme helpers or file-private SCSS vars (`$-…`).

## 🔍 Detect

Grep for `var(--` in component SCSS.

## 🔧 Fix

Replace `var(--…)` with a theme helper or `$-` variable.

## 📝 Examples

### ❌ Bad

`color: var(--brand-ink);`

### ✅ Good

`color: color.primary();`
