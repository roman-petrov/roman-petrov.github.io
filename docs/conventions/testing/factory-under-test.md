# 🧪 Factory under test

- **id:** `testing/factory-under-test`
- **emoji:** 🧪
- **applies:** `**/*.test.{ts,tsx}`

## 📐 Norm

- Factory modules: create an instance.
- Don't destructure the factory.

## 🔍 Detect

Tests that destructure a factory module or call factory methods without an instance.

## 🔧 Fix

Create an instance; call methods on it.

## 📝 Examples

### ❌ Bad

`const { read } = Store;`

### ✅ Good

```ts
const store = Store({ seed: 42 });
store.read();
```
