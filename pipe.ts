export interface Pipe<T> {
  result: T
  pipe<R>(func: (args: T) => R): Pipe<R>
}

export function pipe<T, R>(args: T, func: (args: T) => R): Pipe<R> {
  const result = func(args)
  return {
    result,
    pipe: (func) => pipe(result, func),
  }
}
