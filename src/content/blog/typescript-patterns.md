# TypeScript Patterns I Use Every Day

Practical TypeScript patterns that make codebases more maintainable and type-safe.

---

After years of writing TypeScript, these are the patterns I reach for most often.

## Branded types

Branded types prevent you from accidentally passing a `UserId` where a `PostId` is expected, even though both are strings under the hood.

```typescript
type Brand<T, B> = T & { __brand: B };
type UserId = Brand<string, 'UserId'>;
type PostId = Brand<string, 'PostId'>;
```

## Exhaustive switches

Using `never` to ensure switch statements handle all cases at compile time.

## Result types

Instead of throwing exceptions, return a discriminated union that forces callers to handle both success and failure cases explicitly.

---

Good types are documentation that the compiler enforces.
