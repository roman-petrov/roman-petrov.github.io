# 🎨 No component custom props

- **id:** `css/no-component-custom-props`
- **emoji:** 🎨
- **applies:** `**/*.{scss,module.scss}`

## 📐 Norm

Don’t introduce new `--*` custom properties in component SCSS — use `$-` vars or theme tokens.

## 🔍 Detect

Find `--` custom property definitions in component SCSS.

## 🔧 Fix

Replace with a file-private `$-` variable or a theme token.

## 📝 Examples

### ❌ Bad

```scss
.item {
  --gap: 1rem;
  padding: var(--gap);
}
```

### ✅ Good

```scss
$-gap: 1rem;

.item {
  padding: $-gap;
}
```
