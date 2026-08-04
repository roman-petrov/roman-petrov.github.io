# 🔧 Destructure parameters

- **id:** `typescript/destructure-params`
- **emoji:** 🔧
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- Destructure object parameters when reading fields: `({ a, b }: T)`.
- Exception: when the whole object is only forwarded.

## 🔍 Detect

Find `(props: T)` with `props.x` in the body (not pass-through-only).

## 🔧 Fix

Change to destructured params

## 📝 Examples

### ❌ Bad

`const run = (props: Props) => props.value;`

### ✅ Good

`const run = ({ value }: Props) => value;`
