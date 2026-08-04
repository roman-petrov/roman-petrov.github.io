# 🗑️ Unused CSS variables

- **id:** `unused/css-variables`
- **emoji:** 🗑️
- **applies:** `**/*.{scss,module.scss}`

## 📐 Norm

`$var` or `--css-var` never referenced must be removed.

## 🔍 Detect

- Extract variables.
- Grep usages.

## 🔧 Fix

Remove the declaration

## 📝 Examples

### ❌ Bad

`$-unused: 1rem;` never referenced

### ✅ Good

Remove the unused variable
