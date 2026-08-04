# 🎨 Rem and units

- **id:** `css/rem-and-units`
- **emoji:** 🎨
- **applies:** `**/*.{scss,module.scss}`

## 📐 Norm

- Prefer `rem` for lengths (padding, gap, font-size, …).
- `px` only for borders (e.g. `1px solid`).
- `%`, `vh`/`vw`, `fr`, `em` are fine when the layout needs them.

## 🔍 Detect

Find `px` lengths that aren’t borders.

## 🔧 Fix

Convert those lengths to `rem`.

## 📝 Examples

### ❌ Bad

`padding: 16px;`

### ✅ Good

`padding: 1rem;`
