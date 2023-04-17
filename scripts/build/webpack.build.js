
const miniCssExtractPlugin = require('mini-css-extract-plugin')
// const webpackBundleAnalyzer = require('webpack-bundle-analyzer')
const cssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const terserWebpackPlugin = require('terser-webpack-plugin')
const { getCommonConfig } = require('../share/getCommonWebpackConfig')
const { root, mergeWebpack } = require('../index')

/**
 * Webpack build config
 */

const pkg = require(root('package.json'))

const prodConfig =  {
  mode: 'production',
  entry: root('./packages/index.ts'),
  output: {
    clean: false,
    filename: 'index.js',
    library: pkg.name,
    libraryTarget: 'umd',
    globalObject: 'this',
    path: root('lib')
  },
  externals: ['react', 'react-dom'],
  optimization: {
    minimizer: [
      // terser css.
      new cssMinimizerWebpackPlugin(),
      // terser js.
      new terserWebpackPlugin()
    ],
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: 'index.css',
    })
  ]
}

module.exports = mergeWebpack(getCommonConfig(), prodConfig)
