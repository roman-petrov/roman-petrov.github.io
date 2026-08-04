# 📘 Strict boolean expressions

- **id:** `eslint/strict-boolean`
- **emoji:** 📘
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Conditions must be booleans — don’t rely on truthiness of strings, numbers, or objects. Compare explicitly.

## 🔍 Detect

Find `if (value)` / `value &&` where `value` is not a `boolean`.

## 🔧 Fix

Use an explicit check (`!== undefined`, `!== ""`, `> 0`, …).

## 📝 Examples

### ❌ Bad

`if (name) { … }`

### ✅ Good

`if (name !== undefined && name !== "") { … }`
