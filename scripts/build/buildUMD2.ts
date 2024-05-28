/**
 * build CJS packages.
 *
 * @Author TangJiaHui
 * @Date 2024/1/19
 * @Description Use webpack to build commonjs packages.
 */
import {
  // NAME,
  root,
  PKG_DIR,
  buildWebpack,
  getPackageNamePathMap,
  getWebpackCommon,
  analysisWebpackBundleTime,
  alias,
} from '../share';
import { merge } from 'webpack-merge';
import miniCssExtractPlugin from 'mini-css-extract-plugin';
import WebpackBar from 'webpackbar';
import { DefinePlugin, ProvidePlugin } from 'webpack';
import cssMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin';
import terserWebpackPlugin from 'terser-webpack-plugin';

const NAME = 'tiger-ui';
const __DEV__ = process.env.mode === 'development';
const include = __DEV__ ? undefined : PKG_DIR;

export function buildUMD() {
  const cssLoaders = [
    'style-loader',
    // extract css into .css file.
    !__DEV__ && miniCssExtractPlugin.loader,
    { loader: 'css-loader' },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['autoprefixer'],
        },
      },
    },
  ].filter(Boolean);

  buildWebpack({
    mode: 'production',
    entry: {
      index: root('./packages'),
    },
    output: {
      path: root('./umd'),
      filename: '[name].js',
      library: {
        type: 'umd',
        name: 'tiger-ui',
      },
    },
    resolve: {
      alias,
      extensions: ['.ts', '.tsx', '.css', '.less', '...'],
    },
    optimization: __DEV__
      ? undefined
      : {
          minimizer: [
            // compress css.
            new cssMinimizerWebpackPlugin(),
            // compress js.
            new terserWebpackPlugin({
              extractComments: false,
            }),
          ],
        },
    cache: __DEV__
      ? undefined
      : {
          type: 'filesystem',
          allowCollectingMemory: true,
        },
    externals: {
      React: 'react',
      ReactDOM: 'react-dom',
    },
    // externals: ['react', 'react-dom'],
    module: {
      rules: [
        {
          include,
          test: /\.css$/,
          use: cssLoaders,
        },
        {
          include,
          test: /\.less$/,
          use: [
            ...cssLoaders,
            {
              loader: 'less-loader',
              options: {
                additionalData: `@packageName:${NAME};`,
              },
            },
          ],
        },
        {
          include,
          test: /\.(ts|js)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript'],
            },
          },
        },
        {
          include,
          test: /\.(tsx|jsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
        },
      ],
    },
    plugins: [
      new miniCssExtractPlugin({
        filename: (config) => {
          const pkgName = config?.chunk?.name;
          return pkgName === 'index' ? 'index.css' : `${pkgName}/index.css`;
        },
      }),
      // webpack bar.
      new WebpackBar({
        color: '#c01bee',
        basic: true,
        profile: true,
      }),
      new ProvidePlugin({
        React: 'react',
      }),
      new DefinePlugin({
        PACKAGE_NAME: JSON.stringify(NAME),
      }),
    ],
  });
}
