# ⚛️ cn prop

- **id:** `react/cn-prop`
- **emoji:** ⚛️
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Project components expose an optional class-name prop as `cn` (not `className`). The DOM still receives `className`
inside the view.

## 🔍 Detect

Find public `className` props on project components.

## 🔧 Fix

Rename the prop to `cn`.

## 📝 Examples

### ❌ Bad

`type ItemProps = { className?: string };`

### ✅ Good

`type ItemProps = { cn?: string };`
