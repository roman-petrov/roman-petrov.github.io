# ⚛️ Pass-through rest props

- **id:** `react/view-state/rest-props`
- **emoji:** ⚛️
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Pass-through props via `...rest`.

## 🔍 Detect

State hooks that re-list unused pass-through props field by field.

## 🔧 Fix

Destructure used props; forward the rest with `...rest`.

## 📝 Examples

### ❌ Bad

```ts
export const useItemState = ({ value, cn, id, ariaLabel }: ItemProps) => ({
  value,
  cn,
  id,
  ariaLabel,
});
```

### ✅ Good

```ts
export const useItemState = ({ value, ...rest }: ItemProps) => ({
  value,
  ...rest,
});
```
