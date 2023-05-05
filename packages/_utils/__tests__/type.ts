import * as type from '../type';
import { isNumber } from '../type';

const examples = [
  '',
  '11',
  11,
  0,
  true,
  null,
  undefined,
  // @ts-ignore
  Symbol(),
  () => {},
  {},
  NaN,
  [],
];

describe('_utils type.ts test', () => {
  it('isString', () => {
    const res = [true, true, false, false, false, false, false, false, false, false, false, false];
    examples.forEach((v, index) => {
      expect(type.isString(v)).toBe(res[index]);
    });
  });

  it('isNumber', () => {
    const res = [false, false, true, true, false, false, false, false, false, false, true, false];
    examples.forEach((v, index) => {
      expect(type.isNumber(v)).toBe(res[index]);
    });
  });

  it('isFunction', () => {
    const res = [false, false, false, false, false, false, false, false, true, false, false, false];
    examples.forEach((v, index) => {
      expect(type.isFunction(v)).toBe(res[index]);
    });
  });

  it('isArray', () => {
    const res = [false, false, false, false, false, false, false, false, false, false, false, true];
    examples.forEach((v, index) => {
      expect(type.isArray(v)).toBe(res[index]);
    });
  });

  it('isObject', () => {
    const res = [false, false, false, false, false, false, false, false, false, true, false, false];
    examples.forEach((v, index) => {
      expect(type.isObject(v)).toBe(res[index]);
    });
  });
});
