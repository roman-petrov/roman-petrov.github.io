# ⚛️ View/State view

- **id:** `react/view-state/view`
- **emoji:** ⚛️
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- View receives props and returns JSX.
- No hooks.
- No derived values (`const label = active ? "On" : "Off"`).
- Structural JSX checks only (`items.length === 0` → empty state) — no business branching that computes new data.

## 🔍 Detect

Hooks, derived locals, or business branching in `*.view.*`.

## 🔧 Fix

Move logic to state; keep the view as props → JSX.

## 📝 Examples

### ❌ Bad

```tsx
const label = active ? "On" : "Off";
return <span>{label}</span>;
```

### ✅ Good

```tsx
export const ItemView = ({ label }: ItemViewProps) => <span>{label}</span>;
```
