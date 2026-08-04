# 🧪 Abstract fixtures

- **id:** `testing/abstract-fixtures`
- **emoji:** 🧪
- **applies:** `**/*.test.{ts,tsx}`

## 📐 Norm

Fixture values are synthetic stand-ins — never copied from real app, config, or production data.

## 🔍 Detect

N/A (policy).

## 🔧 Fix

Replace with synthetic values (e.g. `"Alice"`, `42`, `"https://example.test"`).

## 📝 Examples

### ❌ Bad

`const apiUrl = "https://api.prod.example.com/v2";` copied from env/config

### ✅ Good

`const apiUrl = "https://example.test";`
