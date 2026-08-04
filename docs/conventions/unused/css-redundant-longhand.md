# 🎨 Redundant longhand

- **id:** `unused/css-redundant-longhand`
- **emoji:** 🎨
- **applies:** `**/*.{scss,module.scss}`

## 📐 Norm

Longhand when shorthand already sets the same value is redundant.

## 🔍 Detect

Manual check or Stylelint `declaration-block-no-redundant-longhand-properties`.

## 🔧 Fix

Remove the redundant longhand

## 📝 Examples

### ❌ Bad

`.item { margin: 1rem; margin-top: 1rem; }`

### ✅ Good

`.item { margin: 1rem; }`
