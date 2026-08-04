# 🔀 Ternary over if-return

- **id:** `typescript/ternary-over-if-return`
- **emoji:** 🔀
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- Prefer a single return with ternary over several `if` branches that each return a value.
- Never introduce an IIFE to force a ternary.
- If the branch needs statements, `await`, or multiple lines — keep `if`/`return`.

## 🔍 Detect

- Find multiple `if … return` for the same outcome.
- Skip cases that would need an IIFE.

## 🔧 Fix

- Use ternary when branches are expressions.
- Otherwise keep `if`/`return`.

## 📝 Examples

### ❌ Bad

```ts
if (active) {
  return "on";
}
return "off";
```

### ✅ Good

`return active ? "on" : "off";`
