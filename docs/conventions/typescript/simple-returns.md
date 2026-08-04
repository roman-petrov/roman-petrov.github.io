# 🔀 Simple object returns

- **id:** `typescript/simple-returns`
- **emoji:** 🔀
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- Prefer simple returns of local names.
- Define handlers and derived values above; in `return { … }` only list names or spreads.
- Do not declare functions or heavy expressions inside the return.

## 🔍 Detect

Find `return {` with inline functions or heavy expressions.

## 🔧 Fix

- Hoist to locals.
- Return names/spreads only.

## 📝 Examples

### ❌ Bad

`return { onSubmit: () => save(value) };`

### ✅ Good

```ts
const submit = () => save(value);
return { submit };
```
