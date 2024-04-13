declare module '*.css';
declare module '*.json';
declare module '*.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare const PACKAGE_NAME: string;

declare interface ObjectLike {
  [K: string]: any | ObjectLike;
}
