# 🔀 Braces in conditionals

- **id:** `typescript/braces`
- **emoji:** 🔀
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Every `if` / `else` / `else if` uses curly braces, even for a single statement.

## 🔍 Detect

Find brace-less conditionals.

## 🔧 Fix

Add braces

## 📝 Examples

### ❌ Bad

`if (ok) return value;`

### ✅ Good

`if (ok) { return value; }`
