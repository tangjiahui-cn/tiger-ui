/**
 * object utils.
 *
 * @author tangjiahui
 * @date 2024/01/30
 */

/**
 * shallow pick a child object which only has truth value.
 * (don't pick propKey in prototype chain, return a new object.)
 */
export function pickTruthyValue(obj: ObjectLike): ObjectLike {
  return Object.keys(obj)
    .filter((k) => obj[k])
    .reduce((res, curKey) => {
      return Object.assign(res, {
        [curKey]: obj[curKey],
      });
    }, Object.create(null));
}

/**
 * shallow pick a child object in object.
 * (don't pick propKey in prototype chain, return a new object.)
 */
export function pick(obj: ObjectLike, includeKeys: string[]) {
  return Object.keys(obj).reduce((result: ObjectLike, key: string) => {
    if (includeKeys.includes(key)) {
      result[key] = obj[key];
    }
    return result;
  }, Object.create(null));
}

/**
 * omit some keys in object.
 * (return a new object)
 */
export function omit(obj: ObjectLike, excludeKeys: string[]) {
  return Object.keys(obj).reduce((result: ObjectLike, key: string) => {
    if (!excludeKeys.includes(key)) {
      result[key] = obj[key];
    }
    return result;
  }, Object.create(null));
}
