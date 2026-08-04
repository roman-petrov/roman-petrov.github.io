# 🗑️ Unused CSS files

- **id:** `unused/css-files`
- **emoji:** 🗑️
- **applies:** `**/*.{scss,module.scss}`

## 📐 Norm

SCSS files never imported must be deleted.

## 🔍 Detect

Grep imports of the file path.

## 🔧 Fix

Delete the file

## 📝 Examples

### ❌ Bad

`Unused.module.scss` never imported

### ✅ Good

Delete the file
