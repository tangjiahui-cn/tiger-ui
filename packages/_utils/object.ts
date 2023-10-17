type CommonObject = {
  [k: string]: any;
};

/**
 * 取对象中真值数据
 */
export function pickTruthyValue(obj: CommonObject): CommonObject {
  return Object.keys(obj)
    .filter((k) => obj[k])
    .reduce((res, curKey) => {
      return Object.assign(res, {
        [curKey]: obj[curKey],
      });
    }, {});
}
