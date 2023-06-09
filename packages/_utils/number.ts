export function range(n: number, min: number, max: number): number {
  if (min > max) {
    let _min = min;
    min = max;
    max = _min;
  }
  return n < min ? min : n > max ? max : n;
}

export function largeThan(n: number, target: number): number {
  return n > target ? n : target;
}

export function lessThan(n: number, target: number): number {
  return n < target ? n : target;
}

export function doubleString(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}

export function isEmpty(v: any): boolean {
  return !v && v !== 0;
}

export function isNumberString(v: string): boolean {
  if (!v) return false;
  return !isNaN(Number(v));
}
