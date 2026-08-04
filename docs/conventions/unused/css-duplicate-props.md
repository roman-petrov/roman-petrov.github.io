# 🎨 Duplicate CSS properties

- **id:** `unused/css-duplicate-props`
- **emoji:** 🎨
- **applies:** `**/*.{scss,module.scss}`

## 📐 Norm

Same property twice in one rule block — first is dead.

## 🔍 Detect

Scan rule blocks for repeated property names.

## 🔧 Fix

Remove the earlier declaration

## 📝 Examples

### ❌ Bad

`.item { padding: 1rem; padding: 2rem; }`

### ✅ Good

`.item { padding: 2rem; }`
