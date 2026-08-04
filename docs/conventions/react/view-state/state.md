# ⚛️ View/State state

- **id:** `react/view-state/state`
- **emoji:** ⚛️
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- State hook holds all logic.
- No JSX in state.

## 🔍 Detect

JSX in `*.state.*`.

## 🔧 Fix

Move markup to the view.

## 📝 Examples

### ❌ Bad

```ts
export const useItemState = () => {
  return <span />;
};
```

### ✅ Good

```ts
export const useItemState = () => {
  const label = "Item";
  return { label };
};
```
