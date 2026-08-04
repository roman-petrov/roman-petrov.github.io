# 🩺 Surgical changes

- **id:** `agent/surgical-changes`
- **emoji:** 🩺
- **applies:** `*`

## 📐 Norm

- Touch only what you must.
- Don't improve adjacent code, comments, or formatting.
- Don't refactor unbroken code.
- Match existing style.
- If you notice unrelated dead code, mention it — don't delete it.
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.
- Every changed line should trace to the user's request.

## 🔍 Detect

N/A (behavioral).

## 🔧 Fix

- Limit the diff to the request.
- Mention unrelated dead code instead of deleting it.
