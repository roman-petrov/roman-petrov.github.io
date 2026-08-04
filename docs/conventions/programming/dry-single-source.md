# 📐 DRY and single source of truth

- **id:** `programming/dry-single-source`
- **emoji:** 📐
- **applies:** `*`

## 📐 Norm

- Don't duplicate logic — extract shared functions/constants.
- For data, keep one canonical place; derive the rest.
- Don't store the same fact in multiple variables/configs.

## 🔍 Detect

Find similar code blocks or parallel lists/values that must stay in sync.

## 🔧 Fix

- Extract shared logic.
- Keep one source and derive.

## 📝 Examples

### ❌ Bad

```ts
const a = items.filter(i => i.active);
const b = items.filter(i => i.active);
```

### ✅ Good

```ts
const active = items.filter(i => i.active);
```
