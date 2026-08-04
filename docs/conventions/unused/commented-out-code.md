# 🗑️ Commented-out code

- **id:** `unused/commented-out-code`
- **emoji:** 🗑️
- **applies:** `*`

## 📐 Norm

- Delete obsolete commented-out code blocks.
- Keep linter/cspell directives.

## 🔍 Detect

Comment blocks with code-like content.

## 🔧 Fix

Delete the commented block

## 📝 Examples

### ❌ Bad

```ts
// const old = run(value);
// return old;
```

### ✅ Good

Delete the commented block
