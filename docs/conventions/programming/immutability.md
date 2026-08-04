# 📐 Prefer immutability

- **id:** `programming/immutability`
- **emoji:** 📐
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Don’t mutate shared or returned data — produce a new value (`map`, spread, new object/array).

Local builder mutation inside a function is fine if the mutated value is not shared and you return a finished result.

## 🔍 Detect

In-place array/object mutation on values that escape the function or are shared.

## 🔧 Fix

Replace with an immutable update.

## 📝 Examples

### ❌ Bad

`items.push(item);`

### ✅ Good

`const next = [...items, item];`
