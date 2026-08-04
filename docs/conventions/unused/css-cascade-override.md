# 🎨 Overridden by cascade

- **id:** `unused/css-cascade-override`
- **emoji:** 🎨
- **applies:** `**/*.{scss,module.scss}`

## 📐 Norm

A declaration that never wins because a later rule or higher specificity always overrides it is dead.

## 🔍 Detect

Trace cascade/specificity across rules (not the same property twice in one block — that is
`unused/css-duplicate-props`).

## 🔧 Fix

Remove the never-applied declaration.

## 📝 Examples

### ❌ Bad

```scss
.item {
  color: red;
}
.item {
  color: blue;
}
```

### ✅ Good

```scss
.item {
  color: blue;
}
```
