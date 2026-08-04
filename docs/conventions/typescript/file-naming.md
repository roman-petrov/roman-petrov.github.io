<!-- cspell:word basenames -->

# 📁 File naming

- **id:** `typescript/file-naming`
- **emoji:** 📁
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- Use PascalCase for `.ts` / `.tsx` file basenames (`UserForm.tsx`).
- Exceptions:
  - `index.ts` / `main.ts` — entry/barrel
  - `entry-*` — bootstrap entrypoints
  - `locales/**` — locale trees
  - hook-only files — camelCase `use*.ts` (`useIsOpen.ts`)

## 🔍 Detect

Check basename casing against the exceptions above.

## 🔧 Fix

- Rename the file.
- Fix imports.

## 📝 Examples

### ❌ Bad

`userForm.tsx`

### ✅ Good

`UserForm.tsx`
