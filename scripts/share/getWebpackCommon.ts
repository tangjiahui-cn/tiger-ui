import miniCssExtractPlugin from 'mini-css-extract-plugin';
import { alias, PKG_DIR, NAME } from '.';
import cssMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin';
import terserWebpackPlugin from 'terser-webpack-plugin';
import WebpackBar from 'webpackbar';
import { Configuration, ProvidePlugin, DefinePlugin } from 'webpack';

const __DEV__ = process.env.mode === 'development';
const include = __DEV__ ? undefined : PKG_DIR;

export function getWebpackCommon(): Configuration {
  const cssLoaders = [
    'style-loader',
    // extract css into .css file.
    !__DEV__ && miniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      // options: {
      //   modules: {
      //     mode: 'local',
      //     localIdentName: '[local]',
      //   },
      // },
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['autoprefixer'],
        },
      },
    },
  ].filter(Boolean);

  return {
    mode: __DEV__ ? 'development' : 'production',
    output: {
      clean: true,
      filename: (data: ObjectLike) => {
        const chunkName = data.chunk.name;
        return chunkName === 'index' ? 'index.js' : `${chunkName}/index.js`;
      },
    },
    externals: __DEV__ ? undefined : ['react', 'react-dom'],
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
    performance: {
      hints: false,
    },
    cache: __DEV__
      ? undefined
      : {
          type: 'filesystem',
          allowCollectingMemory: true,
        },
    resolve: {
      alias,
      extensions: ['.ts', '.tsx', '.css', '.less', '...'],
    },
    module: {
      rules: [
        {
          include,
          test: /\.css/,
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
          test: /\.ts/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript'],
            },
          },
        },
        {
          include,
          test: /\.tsx/,
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
      // extract min css file.
      !__DEV__ &&
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
    ].filter(Boolean),
  } as Configuration;
}
