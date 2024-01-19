/**
 * build CommonJs packages.
 *
 * @Author TangJiaHui
 * @Date 2024/1/19
 * @Description Use webpack to build CommonJs packages.
 */
import { Configuration } from 'webpack';
import { buildWebpack, root } from '../share';
import { umdConfig } from './buildUMD';
import { merge } from 'webpack-merge';

const cjsConfig: Configuration = merge(umdConfig, {
  output: {
    path: root('cjs'),
    library: {
      type: 'commonjs',
    },
  },
});

export function buildCJS() {
  buildWebpack(cjsConfig);
}
