# 🧪 Call without module prefix

- **id:** `testing/call-without-prefix`
- **emoji:** 🧪
- **applies:** `**/*.test.{ts,tsx}`

## 📐 Norm

Inside tests, call destructured functions directly (`fn(x)`), not `Module.fn(x)`.

## 🔍 Detect

Grep for `Module.`-style calls in test bodies after import.

## 🔧 Fix

Call the destructured function.

## 📝 Examples

### ❌ Bad

`expect(Calc.add(1, 2)).toBe(3);`

### ✅ Good

```ts
const { add } = Calc;
expect(add(1, 2)).toBe(3);
```
