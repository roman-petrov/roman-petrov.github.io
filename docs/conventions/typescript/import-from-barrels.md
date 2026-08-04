# 📦 Import from barrels

- **id:** `typescript/import-from-barrels`
- **emoji:** 📦
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

- Always import from barrels (package or directory).
- Never import from concrete sibling files when a barrel exists.

## 🔍 Detect

Deep sibling imports that skip an existing barrel.

## 🔧 Fix

Switch imports to the barrel path.

## 📝 Examples

### ❌ Bad

`import { run } from "./Module/Run";`

### ✅ Good

`import { run } from "./Module";`
