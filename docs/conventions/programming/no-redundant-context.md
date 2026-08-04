# 📝 No redundant context in names

- **id:** `programming/no-redundant-context`
- **emoji:** 📝
- **applies:** `*`

## 📐 Norm

- Inside a parent scope, child identifiers must not repeat words already implied by the parent.
- Example: inside `sendMessage` use `text`, not `messageText`.

## 🔍 Detect

- Read scopes.
- Check if child names echo parent context.

## 🔧 Fix

Shorten to context-free names.

## 📝 Examples

### ❌ Bad

`const sendMessage = (messageText: string) => …`

### ✅ Good

`const sendMessage = (text: string) => …`
