# 🗑️ Unused CSS classes

- **id:** `unused/css-classes`
- **emoji:** 🗑️
- **applies:** `**/*.{scss,module.scss}`

## 📐 Norm

Class selectors or `%placeholder` never used in TS/TSX/HTML must be removed.

## 🔍 Detect

- Extract class/placeholder names.
- Grep each in the codebase.

## 🔧 Fix

Remove selector/placeholder and its sole rule block

## 📝 Examples

### ❌ Bad

`.old-panel { … }` never referenced

### ✅ Good

Remove the unused selector
