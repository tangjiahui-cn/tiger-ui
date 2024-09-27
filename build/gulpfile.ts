import gulp from 'gulp';
import merge2 from 'merge2';
import path from 'path';
import gulpTS from 'gulp-typescript';
import gulpBabel from 'gulp-babel';
import gulpLess from 'gulp-less';
import { getBabelConfig } from './getBabelConfig';
import tsConfig from '../tsconfig.json';
import { rimrafSync } from 'rimraf';
import { loggerPath } from './gulp-plugins/loggerPath';
import { loggerContent } from './gulp-plugins/loggerContent';
import { replaceAlias } from './gulp-plugins/replaceAlias';

const root = (...args: string[]) => path.resolve(__dirname, '..', ...args);
const ROOT_DIR = root();
const PKG_DIR = root('packages');
const ESM_DIR = root('es');
const CJS_DIR = root('lib');

async function clearESM() {
  return rimrafSync(ESM_DIR);
}

async function clearCJS() {
  return rimrafSync(CJS_DIR);
}

async function compileTSXForESM() {
  const tsStream = gulp
    .src([
      `${PKG_DIR}/**/*.ts`,
      `${PKG_DIR}/**/*.tsx`,
      `${PKG_DIR}/**/*.js`,
      `!${PKG_DIR}/**/__tests__/**/*.*`,
      `!${ROOT_DIR}/**/node_modules/**/*.*`,
    ])
    .pipe(
      gulpTS({
        ...tsConfig.compilerOptions,
        rootDir: PKG_DIR,
        baseUrl: root(),
      }),
    );
  const jsStream = replaceAlias(tsStream.js, true).pipe(gulpBabel(getBabelConfig(true) as any));
  const dtsStream = replaceAlias(tsStream.dts, true);
  return merge2([jsStream, dtsStream]).pipe(gulp.dest(ESM_DIR));
}

async function compileTSXForCJS() {
  const tsStream = gulp
    .src([
      `${PKG_DIR}/**/*.ts`,
      `${PKG_DIR}/**/*.tsx`,
      `${PKG_DIR}/**/*.js`,
      `!${PKG_DIR}/**/__tests__/**/*.*`,
      `!${ROOT_DIR}/**/node_modules/**/*.*`,
    ])
    .pipe(
      gulpTS({
        ...tsConfig.compilerOptions,
        rootDir: PKG_DIR,
        baseUrl: root(),
      }),
    );
  const jsStream = replaceAlias(tsStream.js).pipe(gulpBabel(getBabelConfig(false) as any));
  const dtsStream = replaceAlias(tsStream.dts);
  return merge2([jsStream, dtsStream]).pipe(gulp.dest(CJS_DIR));
}

function compileLessTo(path: string) {
  return gulp
    .src([`${PKG_DIR}/**/*.less`, '!**/node_modules/**/*.less', '!**/__tests__/**/*.less'])
    .pipe(gulpLess())
    .pipe(gulp.dest(path));
}

function moveLessTo(path: string) {
  return gulp
    .src([`${PKG_DIR}/**/*.less`, '!**/node_modules/**/*.less', '!**/__tests__/**/*.less'])
    .pipe(gulp.dest(path));
}

async function compileLessForESM() {
  return compileLessTo(ESM_DIR);
}

async function moveLessForESM() {
  return moveLessTo(ESM_DIR);
}

async function compileLessForCJS() {
  return compileLessTo(CJS_DIR);
}

async function moveLessForCJS() {
  return moveLessTo(CJS_DIR);
}

export default (gulp.series as Function)(
  gulp.series(clearESM, compileTSXForESM, compileLessForESM, moveLessForESM),
  gulp.series(clearCJS, compileTSXForCJS, compileLessForCJS, moveLessForCJS),
);
