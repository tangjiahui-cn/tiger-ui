import { merge } from 'webpack-merge';
import { getPackageNamePathMap, getWebpackCommon, NAME, PKG_DIR, root } from '../share';

export default merge(getWebpackCommon(), {
  entry: {
    ...getPackageNamePathMap(PKG_DIR),
    index: root('packages'),
  },
  output: {
    path: root('lib'),
    library: {
      name: NAME,
      type: 'commonjs',
    },
  },
});
