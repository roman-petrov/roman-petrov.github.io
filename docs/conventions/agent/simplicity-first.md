# ✂️ Simplicity first

- **id:** `agent/simplicity-first`
- **emoji:** ✂️
- **applies:** `*`

## 📐 Norm

Agent process (scope of the request):

- Minimum code that solves the problem.
- No features beyond what was asked.
- No abstractions for single-use code.
- No flexibility or config that was not requested.
- No error handling for impossible scenarios.
- If 200 lines could be 50, rewrite.

Code smell rules → `programming/kiss-yagni-occam`.

## 🔍 Detect

N/A (behavioral).

## 🔧 Fix

- Delete speculative code.
- Prefer the smallest correct change.
