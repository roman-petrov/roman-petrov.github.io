# 📦 Pure module

- **id:** `typescript/pure-module`
- **emoji:** 📦
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- Export as one namespace object: `export const ModuleName = { fn1, fn2 }`.
- Don’t export individual functions (exception: rare global helpers such as `t`).
- Declare each member as a local `const`.
- In the export object, list only those names (no calls, inline functions, or other expressions).
- Same shape as factory `return { … }` / `typescript/simple-returns` / `typescript/no-return-rename`.

## 🔍 Detect

- Individual `export function` / `export const fn` that should be namespaced.
- `export const X = {` with property values that are not bare local names or spreads.

## 🔧 Fix

- Hoist members to locals.
- Group into one namespace export of names only.

## 📝 Examples

### ❌ Bad

`export const add = (a: number, b: number) => a + b;`

```ts
export const Calc = {
  add: (a: number, b: number) => a + b,
  subtract: (a: number, b: number) => a - b,
};
```

### ✅ Good

```ts
const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
export const Calc = { add, subtract };
```
