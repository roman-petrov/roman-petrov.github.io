# 🔧 Minimal parameters

- **id:** `programming/minimal-params`
- **emoji:** 🔧
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- A function accepts only parameters it uses.
- Object param with 1 used field → pass a scalar.
- Object param with 2+ used fields → small input type with only those fields.

## 🔍 Detect

Find object params; count which fields the body uses.

## 🔧 Fix

- Narrow the signature.
- Update call sites.

## 📝 Examples

### ❌ Bad

```ts
formatGreeting(user); // uses only user.name
```

### ✅ Good

```ts
formatGreeting(name);
```
