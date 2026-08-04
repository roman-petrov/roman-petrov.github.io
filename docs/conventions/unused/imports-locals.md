# 🗑️ Unused imports and locals

- **id:** `unused/imports-locals`
- **emoji:** 🗑️
- **applies:** `**/*.{ts,tsx,js,jsx}`

## 📐 Norm

- Remove unused imports.
- Remove unused variables.
- Remove similar unused locals.

## 🔍 Detect

Find bindings never referenced after declaration.

## 🔧 Fix

Delete unused imports/locals

## 📝 Examples

### ❌ Bad

```ts
import { unused, run } from "./run";
return run();
```

### ✅ Good

```ts
import { run } from "./run";
return run();
```
