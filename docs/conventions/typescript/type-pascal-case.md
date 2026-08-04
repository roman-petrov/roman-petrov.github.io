# 📝 Type PascalCase

- **id:** `typescript/type-pascal-case`
- **emoji:** 📝
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Types use PascalCase.

## 🔍 Detect

Type aliases / interfaces with non-PascalCase names.

## 🔧 Fix

Rename the type to PascalCase.

## 📝 Examples

### ❌ Bad

`type user = { name: string };`

### ✅ Good

`type User = { name: string };`
