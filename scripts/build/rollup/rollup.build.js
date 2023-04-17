import progress from 'rollup-plugin-progress';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import url from '@rollup/plugin-url';
import postcss from 'rollup-plugin-postcss';
import postcssModule from 'postcss-modules';
import cssnano from 'cssnano';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import autoprefixer from 'autoprefixer';
import terser from '@rollup/plugin-terser';

const __dirname = dirname(fileURLToPath(import.meta.url));
const resolvePath = (...args) => path.resolve(__dirname, ...args);

/**
 * it's a risk way to use Rollup for build this component library.
 * you can try, but don't publish to npm.
 */
const root = (pathDes) => resolvePath('../../../', pathDes);

export default {
  external: ['react', 'react-dom'],
  input: root('./packages/index.ts'),
  output: [
    {
      name: 'index',
      format: 'es',
      dir: 'dist',
    },
  ],
  plugins: [
    progress(),
    resolve(),
    commonjs(),
    alias({
      entries: {
        '@/': root('./packages/'),
      },
    }),
    typescript({
      tsconfig: root('tsconfig.json'),
    }),
    json(),
    babel(),
    postcss({
      modules: true,
      extract: true,
      plugins: [
        // TODO: if you use postcssModule and extract .css file, can't get right className.
        autoprefixer(),
        // postcssModule({
        //   generateScopedName: '[local]',
        //   getJSON: () => null
        // }),
        cssnano(),
      ],
    }),
    url({
      // max 20kb inject to code.
      limit: 20 * 1024,
    }),
    terser(),
  ],
};
