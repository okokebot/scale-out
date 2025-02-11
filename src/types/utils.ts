// 固定長配列
export type FixedLengthArray<
  T,
  N extends number,
  A extends unknown[] = [],
> = A extends { length: N } ? A : FixedLengthArray<T, N, [...A, T]>;
