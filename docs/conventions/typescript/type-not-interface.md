# 📦 type not interface

- **id:** `typescript/type-not-interface`
- **emoji:** 📦
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Use only `type`, never `interface`.

## 🔍 Detect

Grep for `interface` + space.

## 🔧 Fix

Replace with `type`

## 📝 Examples

### ❌ Bad

`interface User { name: string }`

### ✅ Good

`type User = { name: string };`
