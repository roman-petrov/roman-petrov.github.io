# 🔧 Boolean defaults

- **id:** `programming/boolean-defaults`
- **emoji:** 🔧
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- Boolean parameters and properties are optional with default `false`.
- Passing `true` activates something off by default.

## 🔍 Detect

- Required booleans.
- Defaults of `true`.

## 🔧 Fix

- Make optional with default `false`.
- Update call sites.

## 📝 Examples

### ❌ Bad

```ts
const run = (verbose: boolean) => …
```

### ✅ Good

```ts
const run = (verbose = false) => …
```
