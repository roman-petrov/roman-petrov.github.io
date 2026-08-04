# ⚡ Concise arrow body

- **id:** `typescript/arrow-concise-body`
- **emoji:** ⚡
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- When an arrow function body is a single statement, prefer expression form without `{ }` / `return` if behavior stays
  the same.
- Keep a block when there are multiple statements.
- Keep a block when braces are required for correct meaning (e.g. a lone object literal needs `() => ({ … })`, not a
  block).

## 🔍 Detect

Find `=> {` bodies whose only statement is `return …;` (or a single expression statement) and that can become an
expression body unchanged.

## 🔧 Fix

- Drop the block and `return`; use `=> expr`.
- For object literals use `=> ({ … })`.

## 📝 Examples

### ❌ Bad

```ts
const double = (n: number) => {
  return n * 2;
};
```

### ✅ Good

```ts
const double = (n: number) => n * 2;
```
