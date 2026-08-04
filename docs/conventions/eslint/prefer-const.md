# 📘 Prefer const

- **id:** `eslint/prefer-const`
- **emoji:** 📘
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Prefer `const`; avoid needless `let`.

## 🔍 Detect

Find `let` bindings that are never reassigned.

## 🔧 Fix

Change to `const`.

## 📝 Examples

### ❌ Bad

```ts
let total = values.reduce((sum, n) => sum + n, 0);
```

### ✅ Good

```ts
const total = values.reduce((sum, n) => sum + n, 0);
```
