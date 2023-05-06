import { range, largeThan, lessThan } from '../number';

describe('_utils number.ts test', () => {
  it('range', () => {
    expect(range(1, 2, 3)).toBe(2);
    expect(range(1, -1, 3)).toBe(1);
    expect(range(1, -1, 0)).toBe(0);
    expect(range(1, -1, -1)).toBe(-1);
    expect(range(1, 2, 2)).toBe(2);
    expect(range(1, 3, 2)).toBe(2);
  });

  it('large than', () => {
    expect(largeThan(1, 0)).toBe(1);
    expect(largeThan(0, 0)).toBe(0);
    expect(largeThan(-1, 0)).toBe(0);
  });

  it('less than', () => {
    expect(lessThan(1, 0)).toBe(0);
    expect(lessThan(0, 0)).toBe(0);
    expect(lessThan(-1, 0)).toBe(-1);
  });
});
