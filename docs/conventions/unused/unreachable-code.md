# 🗑️ Unreachable code

- **id:** `unused/unreachable-code`
- **emoji:** 🗑️
- **applies:** `**/*.{ts,tsx,js,jsx}`

## 📐 Norm

Remove code after `return`/`throw` or in branches that never run.

## 🔍 Detect

Inspect control flow for dead blocks.

## 🔧 Fix

Remove the dead block

## 📝 Examples

### ❌ Bad

```ts
return value;
log(value);
```

### ✅ Good

`return value;`
