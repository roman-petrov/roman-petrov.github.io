# 🔧 Max parameters

- **id:** `typescript/max-params`
- **emoji:** 🔧
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- At most 5 positional parameters.
- Above that, take an options object (or split the function).

## 🔍 Detect

Count positional params on functions.

## 🔧 Fix

- Collapse into an options object.
- Or split the function.

## 📝 Examples

### ❌ Bad

`run(a, b, c, d, e, f)`

### ✅ Good

`run(options)`
