export function range(n: number, min: number, max: number) {
  if (min > max) {
    let _min = min;
    min = max;
    max = _min;
  }
  return n < min ? min : n > max ? max : n;
}

export function largeThan(n: number, target: number) {
  return n > target ? n : target;
}

export function lessThan(n: number, target: number) {
  return n < target ? n : target;
}
