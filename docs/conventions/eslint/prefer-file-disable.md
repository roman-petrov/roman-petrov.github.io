# 📘 Prefer file-top disable

- **id:** `eslint/prefer-file-disable`
- **emoji:** 📘
- **applies:** `**/*.{js,ts,tsx,mjs,cjs}`

## 📐 Norm

Prefer a file-top `eslint-disable` over scattered `eslint-disable-next-line` for whole-file concerns.

## 🔍 Detect

Find many `eslint-disable-next-line` for the same whole-file concern.

## 🔧 Fix

Replace with one file-top disable (before imports).

## 📝 Examples

### ❌ Bad

```ts
import { run } from "./run";
// eslint-disable-next-line no-console
console.log(run());
// eslint-disable-next-line no-console
console.log("done");
```

### ✅ Good

```ts
/* eslint-disable no-console */
import { run } from "./run";
console.log(run());
console.log("done");
```
