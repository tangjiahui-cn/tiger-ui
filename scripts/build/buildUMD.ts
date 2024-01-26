/**
 * build CJS packages.
 *
 * @Author TangJiaHui
 * @Date 2024/1/19
 * @Description Use webpack to build commonjs packages.
 */
import {
  NAME,
  root,
  PKG_DIR,
  buildWebpack,
  getPackageNamePathMap,
  getWebpackCommon,
} from '../share';
import { merge } from 'webpack-merge';

export function buildUMD() {
  buildWebpack(
    merge(getWebpackCommon(), {
      entry: {
        ...getPackageNamePathMap(PKG_DIR),
        index: root('packages'),
      },
      output: {
        path: root('umd'),
        library: {
          name: NAME,
          type: 'umd',
        },
      },
    }),
  );
}
