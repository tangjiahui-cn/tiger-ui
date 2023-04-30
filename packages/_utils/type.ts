export const isString = (o: any): boolean => typeof o === 'string';
export const isNumber = (o: any): boolean => typeof o === 'number';
export const isFunction = (o: any): boolean => o instanceof Function;
export const isArray = (o: any): boolean => Array.isArray(o);
export const isObject = (o: any): boolean => typeof o === 'object' && o && !isArray(o);
