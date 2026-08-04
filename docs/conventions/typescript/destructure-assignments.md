# 🔧 Destructure assignments

- **id:** `typescript/destructure-assignments`
- **emoji:** 🔧
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Prefer `const { a, b } = obj` over `const x = obj` then `x.a`.

## 🔍 Detect

Find whole-object assigns followed by property access.

## 🔧 Fix

Destructure needed properties

## 📝 Examples

### ❌ Bad

```ts
const user = obj;
const name = user.name;
```

### ✅ Good

`const { name } = obj;`
