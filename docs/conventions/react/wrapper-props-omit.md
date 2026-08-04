# ⚛️ Wrapper props via Omit

- **id:** `react/wrapper-props-omit`
- **emoji:** ⚛️
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- Wrappers that pass through to a child: build props from the child's exported props with `Omit<…>` plus own fields.
- Don't re-list child props by hand.

## 🔍 Detect

Find wrappers that duplicate child prop lists.

## 🔧 Fix

- Use `Omit<ChildProps, …> & { … }`.
- Spread to the child.

## 📝 Examples

### ❌ Bad

Re-list every `Control` prop by hand on `Field`

### ✅ Good

`type FieldProps = Omit<ControlProps, "cn"> & { label: string };`
