type Object = {
  [k: string]: any;
};

export const isString = (o: any): o is string => typeof o === 'string';
export const isNumber = (o: any): o is number => typeof o === 'number';
export const isFunction = (o: any): o is Function => o instanceof Function;
export const isArray = (o: any): o is any[] => Array.isArray(o);
export const isObject = (o: any): o is Object => !!(typeof o === 'object' && o && !isArray(o));
export const isBoolean = (o: any): o is boolean => typeof o === 'boolean';
