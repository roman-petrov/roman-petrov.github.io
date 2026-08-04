# 📦 No module-level let

- **id:** `typescript/no-module-let`
- **emoji:** 📦
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- Don’t use `let` at module scope — only `const` or functions.
- `let` inside a factory/closure is allowed when reassignment is needed.

## 🔍 Detect

Grep top-level `let`.

## 🔧 Fix

Use `const`, or move the `let` into a function/factory.

## 📝 Examples

### ❌ Bad

```ts
let count = 0;
export const bump = () => {
  count += 1;
};
```

### ✅ Good

```ts
export const Counter = () => {
  let count = 0;
  const bump = () => {
    count += 1;
  };
  return { bump };
};
```
