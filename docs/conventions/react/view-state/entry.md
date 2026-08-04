# ⚛️ View/State entry

- **id:** `react/view-state/entry`
- **emoji:** ⚛️
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Entry (`ComponentName.tsx`) only:

- props type
- call state hook
- render view

Not in entry:

- layout JSX
- logic
- hooks beyond the state hook composition

## 🔍 Detect

- Entry files with layout JSX.
- Entry files with conditionals.
- Entry files with extra logic.

## 🔧 Fix

Move layout/logic to view/state.

## 📝 Examples

### ❌ Bad

- Logic in `Item.tsx`
- JSX in `Item.tsx`

### ✅ Good

`export const Item = (props: ItemProps) => <ItemView {...useItemState(props)} />;`
