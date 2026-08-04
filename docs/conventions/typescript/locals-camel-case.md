# 📝 Locals camelCase

- **id:** `typescript/locals-camel-case`
- **emoji:** 📝
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Variables, parameters, and object literal props/methods use camelCase.

## 🔍 Detect

Locals, params, or object keys using PascalCase or other casings.

## 🔧 Fix

Rename to camelCase.

## 📝 Examples

### ❌ Bad

`const UserName = user.Name;`

### ✅ Good

`const userName = user.name;`
