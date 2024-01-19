import path from 'path';
import pkg from '../../package.json';

export * from './buildWebpack';
export * from './buildRollup';
export * from './isFile';
export * from './packages';

// package name.
export const NAME = pkg.name;

// get path under root directory.
export const root = (...args: string[]) => path.resolve(__dirname, '../../', ...args);

// packages directory
export const PKG_DIR = root('packages');

// alias map.
export const alias = {
  [NAME]: PKG_DIR,
  '@': PKG_DIR,
};
