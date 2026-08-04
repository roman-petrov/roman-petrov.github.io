# 📦 Infer types from values

- **id:** `typescript/infer-types`
- **emoji:** 📦
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- Prefer inferring types from values (`as const`, `typeof`, `ReturnType`, `Parameters`).
- Annotate only when inference is impossible or hurts readability.
- Omit annotations the compiler already infers.

## 🔍 Detect

Find redundant annotations on consts/returns where inference works.

## 🔧 Fix

- Remove annotation.
- Or use `as const` / `typeof` patterns.

## 📝 Examples

### ❌ Bad

`const status: "idle" | "done" = "idle";`

### ✅ Good

`const status = "idle" as const;`
