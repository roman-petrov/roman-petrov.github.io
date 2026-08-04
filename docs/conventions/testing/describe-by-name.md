# 🧪 describe by function name

- **id:** `testing/describe-by-name`
- **emoji:** 🧪
- **applies:** `**/*.test.{ts,tsx}`

## 📐 Norm

- Top-level `describe` uses the name of the function/method under test.
- One top-level describe per function.
- Nest only for sub-behaviors of the same function.
- Factory method tests: `describe` by method name.

## 🔍 Detect

Check first argument of top-level `describe`.

## 🔧 Fix

Rename describe to the function/method name.

## 📝 Examples

### ❌ Bad

`describe("Calc module", () => { … });`

### ✅ Good

`describe("add", () => { … });`
