# 🎨 Default/initial CSS value

- **id:** `unused/css-default-value`
- **emoji:** 🎨
- **applies:** `**/*.{scss,module.scss}`

## 📐 Norm

Properties set to `initial`/`unset`/UA default with no effect must be removed.

## 🔍 Detect

Identify no-op default declarations.

## 🔧 Fix

Remove if they have no effect

## 📝 Examples

### ❌ Bad

`float: none;` when it changes nothing

### ✅ Good

Remove the no-op declaration
