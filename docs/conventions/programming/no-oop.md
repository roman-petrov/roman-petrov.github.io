# 📐 No OOP

- **id:** `programming/no-oop`
- **emoji:** 📐
- **applies:** `**/*.{ts,tsx,js,jsx}`

## 📐 Norm

- Don't use classes or object-oriented style.
- Prefer functions and modules.

## 🔍 Detect

Grep for `class` + space in source (exclude generated).

## 🔧 Fix

Rewrite as functions/modules

## 📝 Examples

### ❌ Bad

`class User { constructor(name: string) { this.name = name; } }`

### ✅ Good

`type User = { name: string };`
