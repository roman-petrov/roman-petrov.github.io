# 🗑️ Unused type export

- **id:** `unused/type-export`
- **emoji:** 🗑️
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Exported types never imported elsewhere must be removed (or un-exported if only local).

## 🔍 Detect

Grep imports of the type name.

## 🔧 Fix

- Remove unused type.
- Or un-export.

## 📝 Examples

### ❌ Bad

`export type Unused = { value: string };` never imported

### ✅ Good

Remove or un-export
