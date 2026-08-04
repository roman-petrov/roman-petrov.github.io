# 📍 Narrowest scope

- **id:** `programming/narrowest-scope`
- **emoji:** 📍
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- Declare helpers and constants in the narrowest scope that owns all their uses.
- If only one function (or one factory closure) uses them, nest them inside that owner — do not leave them at module
  top.
- Keep a wider scope only when shared by sibling owners, exported, or required for mutual recursion across those owners.
- Single _reference_ → inline (`programming/inline-one-offs`).
- Multiple references under one owner → nest here.
- Multiple owners → shared module/factory scope.

## 🔍 Detect

- Find module-level private `const` helpers/values.
- Count which sibling functions or factories reference them.
- Flag when all uses sit inside a single owner.

## 🔧 Fix

- Move the declaration into that owner.
- Leave module/factory scope when a second owner exists or the binding is exported.

## 📝 Examples

### ❌ Bad

```ts
const normalize = (text: string) => text.trim().toLowerCase();

export const match = (query: string, items: readonly string[]) => {
  const needle = normalize(query);

  return items.filter(item => normalize(item) === needle);
};
```

### ✅ Good

```ts
export const match = (query: string, items: readonly string[]) => {
  const normalize = (text: string) => text.trim().toLowerCase();
  const needle = normalize(query);

  return items.filter(item => normalize(item) === needle);
};

// Shared by siblings — module scope is correct:
const shared = () => …;
const a = () => shared();
const b = () => shared();
```
