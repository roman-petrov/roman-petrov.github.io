# 🎨 Inherited override

- **id:** `unused/css-inherited-override`
- **emoji:** 🎨
- **applies:** `**/*.{scss,module.scss}`

## 📐 Norm

Child setting the same inherited property to the same value as parent is redundant.

## 🔍 Detect

Compare nested rules to parent for inherited props.

## 🔧 Fix

Remove the redundant child declaration

## 📝 Examples

### ❌ Bad

`.page { color: red; .title { color: red; } }`

### ✅ Good

`.page { color: red; }`
