const HtmlWebpackPlugin = require('html-webpack-plugin');
const { getCommonConfig } = require('../share/getCommonWebpackConfig');
const { root, mergeWebpack } = require('../index')

/**
 * Webpack server config.
 */
const devConfig = {
  mode: 'development',
  entry: root('./examples/src/index.tsx'),
  devServer: {
    port: 10000,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: root('./examples/public/index.html'),
    })
  ]
}

module.exports = mergeWebpack(devConfig, getCommonConfig(true))
