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

// rollup config.
const config: RollupOptions = {
  input: 'packages/index.ts',
  external: ['react', 'react-dom', 'nanoid'],
  output: {
    dir: root('es'),
    format: 'esm',
  },
  plugins: [
    aliasPlugin({
      entries: alias,
    }),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: root('tsconfig.lib.json'),
      emitDeclarationOnly: true,
      declarationDir: root('es'),
    }),
    postcss({
      plugins: [autoprefixer(), cssnano()],
      modules: true,
      minimize: true,
      extract: true,
    }) as InputPluginOption,
    terser(),
    json(),
  ],
};

buildRollup(config);
