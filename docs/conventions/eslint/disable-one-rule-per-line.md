# 📘 One rule per disable line

- **id:** `eslint/disable-one-rule-per-line`
- **emoji:** 📘
- **applies:** `**/*.{js,ts,tsx,mjs,cjs}`

## 📐 Norm

One ESLint rule id per disable comment line.

## 🔍 Detect

Find disable comments listing multiple rules on one line.

## 🔧 Fix

Split into one disable comment (or one rule) per line.

## 📝 Examples

### ❌ Bad

`/* eslint-disable no-console, no-alert */`

### ✅ Good

```ts
/* eslint-disable no-console */
/* eslint-disable no-alert */
```
