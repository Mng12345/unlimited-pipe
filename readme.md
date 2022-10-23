```typescript
const value = pipe(1, (x: number) => x + 2)
  .pipe((v: number) => `${v - 2}`)
  .pipe((v: string) => parseInt(v))
  .pipe((v: number) => ({data: v}))
  .result
```

```
>>> typeof value: 
{
  value: number
}
```
