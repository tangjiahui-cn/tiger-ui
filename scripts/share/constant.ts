import pkg from '../../package.json';
import path from 'path';

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
