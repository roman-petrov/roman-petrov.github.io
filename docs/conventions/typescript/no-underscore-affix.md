# 📝 No underscore affix

- **id:** `typescript/no-underscore-affix`
- **emoji:** 📝
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Leading/trailing `_` forbidden except unused parameters.

## 🔍 Detect

Identifiers with leading or trailing `_` that are not unused parameters.

## 🔧 Fix

Rename without the underscore affix (or prefix unused params with `_` only when required by the signature).

## 📝 Examples

### ❌ Bad

`const _label = value;`

### ✅ Good

`const label = value;`
