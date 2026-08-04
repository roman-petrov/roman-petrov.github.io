# 📦 undefined not null

- **id:** `typescript/undefined-not-null`
- **emoji:** 📦
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Don’t use `null` for absence — use `undefined` or an optional field (`name?: string`).

## 🔍 Detect

Grep for `null`.

## 🔧 Fix

Replace with `undefined` or make the field optional.

## 📝 Examples

### ❌ Bad

`type User = { name: string | null };`

### ✅ Good

`type User = { name?: string };`
