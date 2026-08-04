# 🗑️ Test through public API

- **id:** `unused/test-public-api`
- **emoji:** 🗑️
- **applies:** `**/*.{ts,tsx}`

## 📐 Norm

Prefer testing through the public API — do not require private production seams to make tests work.

Production seams themselves → `unused/test-only-production`.

## 🔍 Detect

Tests that require private seams in production code.

## 🔧 Fix

Rewrite tests to use the public API; remove the private seam.

## 📝 Examples

### ❌ Bad

A test imports `__test__.reset` from a production module.

### ✅ Good

The test exercises only the public export surface.
