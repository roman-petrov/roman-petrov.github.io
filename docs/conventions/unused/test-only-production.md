# 🗑️ Test-only code in production

- **id:** `unused/test-only-production`
- **emoji:** 🗑️
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

No production code that exists solely for tests, e.g.:

- helpers / stubs
- flags / branches
- `export for tests`
- `__test__`
- `if (process.env.TEST)`

How tests should call the module → `unused/test-public-api`.

## 🔍 Detect

Search for test-only seams in non-test files.

## 🔧 Fix

Delete or redesign a minimal intentional seam.

## 📝 Examples

### ❌ Bad

`export const __test__ = { reset };`

### ✅ Good

No test-only exports in production modules.
