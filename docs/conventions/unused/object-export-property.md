# 🗑️ Unused object export property

- **id:** `unused/object-export-property`
- **emoji:** 🗑️
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Exported object properties never referenced must be removed.

## 🔍 Detect

For each exported object property, grep references.

## 🔧 Fix

Remove the unused property.

## 📝 Examples

### ❌ Bad

`export const Calc = { add, unused };`

### ✅ Good

`export const Calc = { add };`
