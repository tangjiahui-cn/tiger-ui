
const miniCssExtractPlugin = require('mini-css-extract-plugin')
// const webpackBundleAnalyzer = require('webpack-bundle-analyzer')
const cssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const terserWebpackPlugin = require('terser-webpack-plugin')
const { getCommonConfig } = require('../share/getCommonWebpackConfig')
const { root, mergeWebpack, PKG_NAME } = require('../index')
const { getPackageNamePathMap } = require('../share/getPackages')

/**
 * Webpack build config
 */

// it's a entry point name.
const ENTRY = 'index'
// component's name-absPath mapping.
const packagesNamePathMap = getPackageNamePathMap(root('packages'))

function isEntryName (name) {
  return name === 'index'
}

function getExtractCssPath (config) {
  const pkgName = config?.chunk?.name
  return isEntryName(pkgName) ? 'index.css' : `${pkgName}/index.css`
}

function getOutFileName (pathData) {
  const pkgName = pathData?.chunk?.name
  return isEntryName(pkgName) ? 'index.js' : `${pkgName}/index.js`
}

const prodConfig =  {
  mode: 'production',
  entry: {
    [ENTRY]: root('./packages/index.ts'),
    ...packagesNamePathMap
  },
  output: {
    clean: false,
    filename: getOutFileName,
    library: PKG_NAME,
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
    ]
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: getExtractCssPath,
    })
  ]
}

module.exports = mergeWebpack(getCommonConfig(), prodConfig)
