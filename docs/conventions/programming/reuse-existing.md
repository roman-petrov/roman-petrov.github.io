# 🔧 Reuse existing project APIs

- **id:** `programming/reuse-existing`
- **emoji:** 🔧
- **applies:** `*`

## 📐 Norm

- Prefer an existing shared helper over inventing a new one.
- Prefer existing UI primitives over one-off markup/CSS.
- Before inventing, search in this order:
  - shared core / utils
  - shared hooks
  - platform / browser helpers
  - UI kit
  - theme (tokens, mixins)
  - package barrels
  - the current package

## 🔍 Detect

N/A (policy).

## 🔧 Fix

- Replace reinvention with the existing API.
- Delete the duplicate.
