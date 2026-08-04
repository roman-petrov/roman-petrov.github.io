# 💬 No noisy comments

- **id:** `programming/comments-no-noise`
- **emoji:** 💬
- **applies:** `*`

## 📐 Norm

- Remove obsolete comments and AI/narrative comments ("ensure that…", step-by-step essays).
- Keep ESLint / Stylelint / cspell directives.

## 🔍 Detect

- Obsolete or AI-narrative comments.
- Do not flag linter/cspell directives.

## 🔧 Fix

Delete the noise; leave tool directives alone.

## 📝 Examples

### ❌ Bad

```ts
// Ensure that we carefully increment the count by one so the value is updated
count += 1;
```

### ✅ Good

```ts
count += 1;
```

Keep directives:

```ts
/* eslint-disable no-console */
```
