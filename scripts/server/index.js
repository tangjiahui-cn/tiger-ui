const HtmlWebpackPlugin = require('html-webpack-plugin');
const { getCommonConfig } = require('../share/getCommonWebpackConfig');
const { root, mergeWebpack } = require('../index');

/**
 * Webpack server config.
 */
module.exports = mergeWebpack(getCommonConfig(true), {
  mode: 'development',
  entry: root('./examples/src/index'),
  devServer: {
    open: true,
    port: 10000,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: root('./examples/public/index.html'),
    }),
  ],
});
