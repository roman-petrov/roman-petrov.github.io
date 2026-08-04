# 📦 Barrel export star

- **id:** `typescript/barrel-export-star`
- **emoji:** 📦
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

In barrels only `export * from "./…"`; no named individual re-exports.

## 🔍 Detect

Non-`export *` re-export lines in `index.ts` barrels.

## 🔧 Fix

Replace named re-exports with `export * from "./File"`.

## 📝 Examples

### ❌ Bad

`export { run } from "./Run";`

### ✅ Good

`export * from "./Run";`
