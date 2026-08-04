# 🗑️ Unused union member

- **id:** `unused/union-member`
- **emoji:** 🗑️
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Union members never used as values must be removed.

## 🔍 Detect

Grep each member as a value.

## 🔧 Fix

Remove the unused member

## 📝 Examples

### ❌ Bad

`type Status = "idle" | "done" | "legacy";` (`legacy` unused)

### ✅ Good

`type Status = "idle" | "done";`
