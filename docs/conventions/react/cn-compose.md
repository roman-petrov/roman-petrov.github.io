# ⚛️ Compose with cn

- **id:** `react/cn-compose`
- **emoji:** ⚛️
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Compose class names with the shared `cn(...)` helper (falsy parts dropped) — not `join` / `filter` / string concat.

## 🔍 Detect

Manual class string concatenation or `filter(Boolean).join`.

## 🔧 Fix

Use `cn(...)`.

## 📝 Examples

### ❌ Bad

`const itemCn = ["item", active && "item-on"].filter(Boolean).join(" ");`

### ✅ Good

`const itemCn = cn("item", active && "item-on");`
