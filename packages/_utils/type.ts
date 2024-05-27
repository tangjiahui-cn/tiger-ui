export const isString = (o: any): o is string => typeof o === 'string';
export const isNumber = (o: any): o is number => typeof o === 'number';
export const isFunction = (o: any): o is Function => o instanceof Function;
export const isArray = (o: any): o is any[] => Array.isArray(o);
export const isObject = (o: any): boolean => !!(typeof o === 'object' && o && !isArray(o));
export const isBoolean = (o: any): o is boolean => typeof o === 'boolean';
export const isNullable = (value: unknown): boolean => !value && value !== 0;
