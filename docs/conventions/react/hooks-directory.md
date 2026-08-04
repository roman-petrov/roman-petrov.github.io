# ⚛️ Hooks in hooks directory

- **id:** `react/hooks-directory`
- **emoji:** ⚛️
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Standalone hook files (`use*.ts`) live under a directory named `hooks/`.

Does **not** apply to:

- View/State files (`*.state.*`)
- a `use*` helper in the same file as its only consumer component

## 🔍 Detect

`use*.ts` / `use*.tsx` files outside a `hooks/` path that are not `*.state.*`.

## 🔧 Fix

Move the file into `hooks/`.

## 📝 Examples

### ❌ Bad

`components/useItem.ts`

### ✅ Good

`components/hooks/useItem.ts`
