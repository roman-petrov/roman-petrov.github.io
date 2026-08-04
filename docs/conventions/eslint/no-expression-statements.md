# 📘 No expression statements

- **id:** `eslint/no-expression-statements`
- **emoji:** 📘
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

No bare side-effect calls (expression statements) outside files that own effects:

- state hooks (`*.state.ts` / `*.state.tsx`)
- modules under `hooks/`
- tests (`*.test.ts` / `*.test.tsx`)

Elsewhere, put side effects behind a returned function or move them into an allowed file.

## 🔍 Detect

Find bare calls used only for side effects in other modules.

## 🔧 Fix

- Move the effect into state / a hook / a test.
- Or return a function the caller invokes.

## 📝 Examples

### ❌ Bad

```ts
// in a pure utility module
log(value);
```

### ✅ Good

```ts
const report = (value: string) => {
  log(value);
};
export const Logger = { report };
```
