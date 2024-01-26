/**
 * local example server.
 *
 * @author tangjiahui
 * @date 2024/1/25
 */

import { root, runWebpackDevServer, getWebpackCommon } from '../share';
import 'webpack-dev-server';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';

runWebpackDevServer(
  merge(getWebpackCommon(), {
    entry: {
      index: root('./example/src/index.tsx'),
    },
    devServer: {
      https: true,
      port: 10000,
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'dev',
      }),
    ],
  }),
);
