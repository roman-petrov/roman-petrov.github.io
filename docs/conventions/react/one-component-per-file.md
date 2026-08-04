# ⚛️ One component per file

- **id:** `react/one-component-per-file`
- **emoji:** ⚛️
- **applies:** `**/*.tsx`

## 📐 Norm

Each component lives in its own file; do not put multiple component definitions in one file.

## 🔍 Detect

Count component definitions per file.

## 🔧 Fix

Split into one file per component

## 📝 Examples

### ❌ Bad

`Item` and `List` both in `Widgets.tsx`

### ✅ Good

`Item.tsx` / `List.tsx`
