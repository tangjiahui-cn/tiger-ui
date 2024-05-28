/**
 * shallow Compare value
 *
 * @author tangjiahui
 * @date 2024/5/28
 */

// shallowCompare(1,1) === true
// shallowCompare([],[]) === true
// shallowCompare({}, {}) === true
// shallowCompare([1],[1]) === true
// shallowCompare({a:1},{a:1}) === true
// shallowCompare(1,2) === false
// shallowCompare(null,{a:1}) === false
export function shallowCompare(a: any, b: any) {
  if (typeof a === 'object') {
    if (!a || !b) return a === b;

    // compare array (tips: [] === [])
    if (Array.isArray(a)) {
      if (Array.isArray(b)) {
        if (!a.length) return true;
        for (const index in a) {
          if (a[index] !== b[index]) return false;
        }
        return true;
      }
      return false;
    }

    // compare object (tips: {} === {})
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(a);
    if (aKeys.length === bKeys.length) {
      if (!aKeys.length) return true;
      for (const key of aKeys) {
        if (a[key] !== b[key]) return false;
      }
      return true;
    }

    return false;
  }

  return a === b;
}
