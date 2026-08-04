# 🎨 Theme only

- **id:** `css/theme-only`
- **emoji:** 🎨
- **applies:** `**/*.{scss,module.scss}`

## 📐 Norm

- Design tokens live only in the shared theme module — not hardcoded in components.
- No raw values in components for:
  - colors
  - font sizes
  - spacing
  - radii
  - shadows
  - transitions
- Import theme helpers via the theme module’s documented `@use` paths.
- If a token is missing, add it to the theme — don’t bypass with a local literal.
- When unsure which helper to use, read the theme module source.

## 🔍 Detect

Find raw color/size/spacing/radius/shadow/transition literals in component SCSS.

## 🔧 Fix

- Replace with theme functions/mixins.
- Add tokens to the theme if needed.

## 📝 Examples

### ❌ Bad

- `color: #333;` in a component
- `padding: 16px;` in a component

### ✅ Good

- `color: color.primary();`
- `padding: space.md();`
