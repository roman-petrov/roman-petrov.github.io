# 🧪 Inline fixtures

- **id:** `testing/inline-fixtures`
- **emoji:** 🧪
- **applies:** `**/*.test.{ts,tsx}`

## 📐 Norm

- Prefer inline literals.
- Extract a module-level constant only when the value is complex or must be shared (e.g. with a mock).

## 🔍 Detect

N/A (policy).

## 🔧 Fix

Inline simple values; extract a constant only when inline would be awkward.
