# ⚛️ No CSS/i18n in state

- **id:** `react/view-state/no-css-i18n`
- **emoji:** ⚛️
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

No CSS modules and no `t(...)` in `*.state.*` — put them in `*.view.*`.

## 🔍 Detect

- CSS module imports in `*.state.*`.
- `t(` in `*.state.*`.

## 🔧 Fix

Move styles and i18n to the view.

## 📝 Examples

### ❌ Bad

```ts
import css from "./Item.module.scss";
export const useItemState = () => ({ label: t("item.label"), css });
```

### ✅ Good

```tsx
export const ItemView = () => <span className={css.label}>{t("item.label")}</span>;
```
