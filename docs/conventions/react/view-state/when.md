# ⚛️ View/State when to use

- **id:** `react/view-state/when`
- **emoji:** ⚛️
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Split into entry / state / view when the component has logic that uses its props (hooks, derived values, handlers).

Keep a single file when the component is presentational and would not need props in a state hook.

## 🔍 Detect

- Has hooks / handlers / derived values that use props, but no View/State split → split.
- Split exists for a pure presentational component → collapse to one file.

## 🔧 Fix

Split or keep a single file accordingly.

## 📝 Examples

### ❌ Bad

Split View/State for a pure `<span>{text}</span>`.

### ✅ Good

One file when there is no logic/state that uses props.
