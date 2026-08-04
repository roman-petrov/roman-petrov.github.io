# 📐 Pure functions

- **id:** `programming/pure-functions`
- **emoji:** 📐
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- Keep I/O and other side effects at clear edges.
- Core logic is pure: args in, value out — extract and test those functions.

## 🔍 Detect

Pure logic mixed with side effects in one unit without a clear boundary.

## 🔧 Fix

- Extract the pure part.
- Keep side effects at the edge.

## 📝 Examples

### ❌ Bad

```ts
const bump = () => {
  total += 1;
};
```

### ✅ Good

```ts
const next = (total: number) => total + 1;
```
