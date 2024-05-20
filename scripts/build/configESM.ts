import { merge } from 'webpack-merge';
import { getWebpackCommon, root } from '../share';

export default merge(getWebpackCommon(), {
  entry: {
    index: root('packages'),
  },
  output: {
    path: root('es'),
    library: {
      type: 'module',
    },
  },
  target: 'web',
  experiments: {
    outputModule: true,
  },
});
