# 🎨 Private SCSS variables

- **id:** `css/private-scss-vars`
- **emoji:** 🎨
- **applies:** `**/*.{scss,module.scss}`

## 📐 Norm

File-private SCSS variables use a dash prefix: `$-name`.

## 🔍 Detect

Find file-local `$vars` without `-` prefix.

## 🔧 Fix

Rename to `$-name`

## 📝 Examples

### ❌ Bad

`$padding: 1rem;`

### ✅ Good

`$-padding: 1rem;`
