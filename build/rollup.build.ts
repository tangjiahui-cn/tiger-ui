import progress from 'rollup-plugin-progress';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import typescript from 'rollup-plugin-typescript2'
import url from '@rollup/plugin-url';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';

export default {
    input: 'packages/index.ts',
    output: [{
        format: 'es',
        file: 'dist/index.js'
    }],
    external: [
        "react",
        "react-dom"
    ],
    plugins: [
        progress(),
        resolve(),
        commonjs(),
        alias({
            entries: [
                { find: '@/', replacement: 'packages/' }
            ]
        }),
        typescript({
            tsconfigOverride: {
                include: ['packages']
            }
        }),
        url({
            limit: 1 * 1024 * 1024
        }),
        postcss({
            minimize: true,
        }),
        terser()
    ]
}
