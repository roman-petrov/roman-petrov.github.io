# 🧪 Destructure module under test

- **id:** `testing/destructure-module`
- **emoji:** 🧪
- **applies:** `**/*.test.{ts,tsx}`

## 📐 Norm

Object-of-functions modules: import, destructure at top, call without module prefix.

## 🔍 Detect

Tests calling `Module.fn` without top-level destructure for object modules.

## 🔧 Fix

- Destructure at top.
- Call `fn()`.

## 📝 Examples

### ❌ Bad

`Calc.add(1, 2)` throughout the file

### ✅ Good

- `const { add } = Calc;`
- `add(1, 2)`
