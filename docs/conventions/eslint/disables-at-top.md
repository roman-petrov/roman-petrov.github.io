# 📘 ESLint disables at top

- **id:** `eslint/disables-at-top`
- **emoji:** 📘
- **applies:** `**/*.{js,ts,tsx,mjs,cjs}`

## 📐 Norm

File-level `eslint-disable` only at the top (before imports).

## 🔍 Detect

Find mid-file file-level `eslint-disable` comments.

## 🔧 Fix

Move the disable to the top of the file, before imports.

## 📝 Examples

### ❌ Bad

```ts
import { run } from "./run";
/* eslint-disable no-console */
console.log(run());
```

### ✅ Good

```ts
/* eslint-disable no-console */
import { run } from "./run";
```
