# ⚛️ State handler names

- **id:** `react/view-state/handler-names`
- **emoji:** ⚛️
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- Handlers you define and return from state are imperatives without an `on` prefix (`setText`, `clear`, `submit`).
- The view wires DOM/`on*` props (`onClick={clear}`).
- Pass-through of existing `on*` props via `...rest` is fine — don’t rename those.

## 🔍 Detect

`on*` names in the **return** of `*.state.*` (handlers defined there).

## 🔧 Fix

Rename returned handlers to imperatives; bind `on*` only in the view.

## 📝 Examples

### ❌ Bad

`return { onClear: clear };`

### ✅ Good

`return { clear };` — view uses `onClick={clear}`.
