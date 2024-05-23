/**
 * build ESM packages.
 *
 * @Author TangJiaHui
 * @Date 2024/1/19
 * @Description Use rollup to build esm packages.
 */
import { InputPluginOption, RollupOptions } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import aliasPlugin from '@rollup/plugin-alias';
import { root, alias, buildRollup } from '../../share';
import definePlugin from '@rollup/plugin-replace';
import { rimraf } from 'rimraf';

const dir = root('es');

// rollup config.
const config: RollupOptions = {
  input: 'packages/index.ts',
  external: ['react', 'react-dom'],
  output: {
    dir,
    format: 'es',
  },
  plugins: [
    definePlugin({
      PACKAGE_NAME: '"tiger-ui"',
    }),
    aliasPlugin({
      entries: alias,
    }),
    resolve(),
    commonjs({
      transformMixedEsModules: true,
      extensions: ['.js', '.ts', '.tsx'],
    }),
    typescript({
      tsconfig: root('tsconfig.lib.json'),
      emitDeclarationOnly: true,
      declarationDir: dir,
    }),
    postcss({
      extensions: ['.css', '.less'],
      plugins: [autoprefixer(), cssnano()],
      minimize: true,
      extract: true,
    }) as InputPluginOption,
    terser(),
    json(),
  ],
};

rimraf('es').then(() => {
  buildRollup(config);
});
