# ⚛️ No class-name building in view

- **id:** `react/view-state/no-class-building`
- **emoji:** ⚛️
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

No class-name building in the view.

## 🔍 Detect

String concat / conditional class assembly in `*.view.*`.

## 🔧 Fix

Move class composition to state (or pass a ready `cn` prop).

## 📝 Examples

### ❌ Bad

```tsx
export const ItemView = ({ active }: ItemViewProps) => <div className={active ? "item item-on" : "item"} />;
```

### ✅ Good

```tsx
export const ItemView = ({ cn }: ItemViewProps) => <div className={cn} />;
```
