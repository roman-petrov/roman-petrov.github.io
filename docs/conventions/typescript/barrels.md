# 📦 Barrel files

- **id:** `typescript/barrels`
- **emoji:** 📦
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- Use `index.ts` barrels in directories.
- Parent barrels re-export children.

## 🔍 Detect

Directories without an `index.ts` barrel where siblings are imported across folders.

## 🔧 Fix

Add `index.ts` barrels and have parents re-export children.

## 📝 Examples

### ❌ Bad

`Module/` with no `index.ts`, callers reach into nested files.

### ✅ Good

`Module/index.ts` re-exports the folder; parents re-export `Module`.
