const miniCssExtractPlugin = require('mini-css-extract-plugin');
// const webpackBundleAnalyzer = require('webpack-bundle-analyzer')
const cssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const terserWebpackPlugin = require('terser-webpack-plugin');
const { getCommonConfig } = require('../share/getCommonWebpackConfig');
const { root, mergeWebpack, NAME } = require('../index');
const { getPackageNamePathMap } = require('../share/getPackages');
const WebpackBar = require('webpackbar');

/**
 * Webpack build config
 */

// it's a entry point name.
const ENTRY = 'index';

// component's name-absPath mapping.
const packagesNamePathMap = getPackageNamePathMap(root('packages'));

// judge is entry point or not.
function isEntryName(name) {
  return name === 'index';
}

// extract css to /lib/.../index.tsx.css.
function getExtractCssPath(config) {
  const pkgName = config?.chunk?.name;
  return isEntryName(pkgName) ? 'index.css' : `${pkgName}/index.css`;
}

// bundle js to /lib/.../index.tsx.js.
function getOutputFileName(pathData) {
  const pkgName = pathData?.chunk?.name;
  return isEntryName(pkgName) ? 'index.js' : `${pkgName}/index.js`;
}

module.exports = mergeWebpack(getCommonConfig(), {
  mode: 'production',
  entry: {
    [ENTRY]: root('./packages/index.ts'),
    ...packagesNamePathMap,
  },
  output: {
    clean: false,
    filename: getOutputFileName,
    library: NAME,
    libraryTarget: 'umd',
    globalObject: 'this',
    path: root('lib'),
  },
  externals: ['react', 'react-dom'],
  optimization: {
    minimizer: [
      // compress css.
      new cssMinimizerWebpackPlugin(),
      // compress js.
      new terserWebpackPlugin(),
    ],
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: getExtractCssPath,
    }),
    new WebpackBar({
      color: '#85d',
      basic: true,
      profile: true,
    }),
  ],
});
