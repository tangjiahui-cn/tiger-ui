export function range(n: number, min: number, max: number) {
  return n < min ? min : n > max ? max : n;
}

export function largeThan(n: number, target: number) {
  return n > target ? n : target;
}

export function lessThan(n: number, target: number) {
  return n < target ? n : target;
}
