# ✂️ Inline one-off code

- **id:** `programming/inline-one-offs`
- **emoji:** ✂️
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

If a variable or function is used only once and not reused elsewhere, remove it and inline the usage.

## 🔍 Detect

Count references to locals/functions in the file and project.

## 🔧 Fix

- Inline the single use.
- Delete the declaration.

## 📝 Examples

### ❌ Bad

```ts
const label = value.toUpperCase();
return label;
```

### ✅ Good

`return value.toUpperCase();`
