# 📘 No disable reasons

- **id:** `eslint/disable-no-reason`
- **emoji:** 📘
- **applies:** `**/*.{js,ts,tsx,mjs,cjs}`

## 📐 Norm

No `-- reason` (or other description) on eslint-disable comments.

## 🔍 Detect

Find `--` descriptions on eslint-disable comments.

## 🔧 Fix

Drop the description; keep only the rule id.

## 📝 Examples

### ❌ Bad

`/* eslint-disable no-console -- legacy logging */`

### ✅ Good

`/* eslint-disable no-console */`
