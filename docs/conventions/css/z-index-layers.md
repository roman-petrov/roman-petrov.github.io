# 🎨 Z-index layers

- **id:** `css/z-index-layers`
- **emoji:** 🎨
- **applies:** `**/*.{scss,module.scss}`

## 📐 Norm

- No raw `z-index` in components.
- Prefer, in order:
  - DOM order
  - `position: relative` on content
  - theme layer mixins (`@include layer.<name>`)
- New layers go in the theme module, not in components.

## 🔍 Detect

Grep for `z-index` in component SCSS.

## 🔧 Fix

- Remove raw `z-index`.
- Or replace with a layer mixin / DOM order.

## 📝 Examples

### ❌ Bad

`z-index: 999;`

### ✅ Good

`@include layer.overlay;`
