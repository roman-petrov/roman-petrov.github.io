# 😀 Convention H1 emoji

- **id:** `markdown/convention-h1-emoji`
- **emoji:** 😀
- **applies:** `docs/conventions/**/*.md`

## 📐 Norm

Convention atom H1 uses the atom category emoji (same value as the `emoji` field).

## 🔍 Detect

Atom files whose H1 leading emoji differs from the `emoji` field.

## 🔧 Fix

Align the H1 emoji with the `emoji` field.

## 📝 Examples

### ❌ Bad

```markdown
# 📦 Title

- **emoji:** 😀
```

### ✅ Good

```markdown
# 😀 Title

- **emoji:** 😀
```
