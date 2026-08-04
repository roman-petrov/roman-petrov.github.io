# 📝 Exported value PascalCase

- **id:** `typescript/exported-value-pascal-case`
- **emoji:** 📝
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- Exported values use PascalCase (house style — not typical npm camelCase exports).
- Exception: React hooks named `use*` stay camelCase (`useItemState`).

## 🔍 Detect

Exported consts/functions with camelCase or other non-PascalCase names, except `use*`.

## 🔧 Fix

Rename the export to PascalCase (leave `use*` hooks as-is).

## 📝 Examples

### ❌ Bad

`export const formatDate = (value: Date) => …;`

### ✅ Good

- `export const FormatDate = (value: Date) => …;`
- `export const useItemState = (props: ItemProps) => …;`
