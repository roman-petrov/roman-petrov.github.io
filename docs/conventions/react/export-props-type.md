# ⚛️ Export props type

- **id:** `react/export-props-type`
- **emoji:** ⚛️
- **applies:** `**/*.tsx`

## 📐 Norm

Always export the component props type as `ComponentNameProps`.

## 🔍 Detect

Check for missing or misnamed exported props type.

## 🔧 Fix

Export `type ComponentNameProps = …`

## 📝 Examples

### ❌ Bad

```tsx
type Props = { value: string };
export const Item = (props: Props) => …;
```

### ✅ Good

```tsx
export type ItemProps = { value: string };
export const Item = (props: ItemProps) => …;
```
