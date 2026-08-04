# 🔀 Strict equality

- **id:** `typescript/strict-equality`
- **emoji:** 🔀
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Always use `===` / `!==`, never `==` / `!=`.

## 🔍 Detect

Grep for `==` / `!=` (excluding `===` / `!==`).

## 🔧 Fix

Replace with strict operators.

## 📝 Examples

### ❌ Bad

`value == 0`

### ✅ Good

`value === 0`
