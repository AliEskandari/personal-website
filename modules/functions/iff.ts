export function iff<T, U>(condition: boolean, then: T, otherwise: U): T | U;
export function iff<T, U>(condition: boolean, then: T): T | null;

export function iff<T, U>(
  condition: boolean,
  then: T,
  otherwise?: U
): T | U | null {
  return condition ? then : otherwise ?? null;
}
