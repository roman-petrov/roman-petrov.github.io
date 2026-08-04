# 💬 Comments

- **id:** `programming/comments`
- **emoji:** 💬
- **applies:** `*`

## 📐 Norm

Don't comment the obvious; only non-obvious intent or non-trivial algorithms.

## 🔍 Detect

Comments that restate the next line of code.

## 🔧 Fix

Delete or rewrite to capture non-obvious intent.

## 📝 Examples

### ❌ Bad

```ts
// Add one
count += 1;
```

### ✅ Good

```ts
// Wrap at API max (legacy)
count = count >= max ? 0 : count + 1;
```
