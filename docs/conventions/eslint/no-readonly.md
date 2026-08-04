# 📘 No Readonly<>

- **id:** `eslint/no-readonly`
- **emoji:** 📘
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Do not use the `Readonly<>` utility type.

## 🔍 Detect

Grep for `Readonly<`.

## 🔧 Fix

Use a plain object type (rely on `readonly` fields or `as const` only when needed).

## 📝 Examples

### ❌ Bad

`type Item = Readonly<{ id: string }>;`

### ✅ Good

`type Item = { id: string };`
