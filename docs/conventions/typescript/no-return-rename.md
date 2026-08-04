# 🔀 No rename in return

- **id:** `typescript/no-return-rename`
- **emoji:** 🔀
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Do not rename in the return object; return under the same name.

## 🔍 Detect

`return {` entries that rename a local (`onSubmit: process`).

## 🔧 Fix

Return the local under its own name (rename the local if needed).

## 📝 Examples

### ❌ Bad

`return { onSubmit: process };`

### ✅ Good

`return { process };`
