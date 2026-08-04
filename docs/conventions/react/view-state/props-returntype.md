<!-- cspell:word returntype -->

# ⚛️ View props ReturnType

- **id:** `react/view-state/props-returntype`
- **emoji:** ⚛️
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

View props type is `ReturnType<typeof useComponentState>` (not hand-written).

## 🔍 Detect

Hand-duplicated view props types.

## 🔧 Fix

Derive view props with `ReturnType`.

## 📝 Examples

### ❌ Bad

`type ItemViewProps = { value: string; setValue: (v: string) => void };`

### ✅ Good

`type ItemViewProps = ReturnType<typeof useItemState>;`
