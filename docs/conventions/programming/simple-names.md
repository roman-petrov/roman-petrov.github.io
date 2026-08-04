# 📝 Simple names

- **id:** `programming/simple-names`
- **emoji:** 📝
- **applies:** `*`

## 📐 Norm

- Prefer the shortest clear name.
- Avoid these stems in **new** identifiers:
  - verbs: `get`, `create`, `make`, `calculate`, `compute`
  - suffixes: `utils` / `utilities` / `util`, `factory`, `helper`, `wrapper`, `manager`
- Allowed exceptions:
  - React hooks `use*`
  - framework APIs (`createContext`, …)
  - established module/factory names already in the codebase

## 🔍 Detect

Grep new identifiers for those stems; skip the exceptions above.

## 🔧 Fix

- Drop the auxiliary verb (`getArea` → `area`).
- Replace a generic suffix with a concrete name (`DateUtils` → `FormatDate`).

## 📝 Examples

### ❌ Bad

- `Rect.calculateArea` / `Rect.getArea`
- `DateUtils` / `formatHelper`

### ✅ Good

- `Rect.area`
- `FormatDate`
