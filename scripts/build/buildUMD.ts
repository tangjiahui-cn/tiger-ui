/**
 * build UMD packages.
 *
 * @Author TangJiaHui
 * @Date 2024/1/19
 * @Description Use webpack to build umd packages.
 */
import { Configuration } from 'webpack';
import { NAME, root, alias, PKG_DIR, buildWebpack, getPackageNamePathMap } from '../share';
import miniCssExtractPlugin from 'mini-css-extract-plugin';
import WebpackBar from 'webpackbar';
import cssMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin';
import terserWebpackPlugin from 'terser-webpack-plugin';

export const umdConfig: Configuration = getUMDConfig();

export function buildUMD() {
  buildWebpack(umdConfig);
}

function getUMDConfig(): Configuration {
  const packageDirMap: ObjectLike = getPackageNamePathMap(PKG_DIR);

  // css loaders.
  const cssLoaders = [
    'style-loader',
    // extract css into .css file.
    miniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          mode: 'local',
          localIdentName: '[local]',
        },
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['autoprefixer'],
        },
      },
    },
  ];

  return {
    mode: 'production',
    entry: {
      ...packageDirMap,
      index: root('packages'),
    },
    output: {
      clean: true,
      filename: (data: ObjectLike) => {
        const chunkName = data.chunk.name;
        return chunkName === 'index' ? 'index.js' : `${chunkName}/index.js`;
      },
      path: root('umd'),
      library: {
        name: NAME,
        type: 'umd',
      },
    },
    externals: ['react', 'react-dom'],
    optimization: {
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
    cache: {
      type: 'filesystem',
      allowCollectingMemory: true,
    },
    resolve: {
      alias,
      extensions: ['.ts', '.tsx', '.css', '.less', '...'],
    },
    module: {
      rules: [
        // css
        {
          include: PKG_DIR,
          test: /\.css/,
          use: cssLoaders,
        },
        // less
        {
          include: PKG_DIR,
          test: /\.less$/,
          use: [...cssLoaders, 'less-loader'],
        },
        // ts
        {
          include: PKG_DIR,
          test: /\.ts/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript'],
            },
          },
        },
        // tsx
        {
          include: PKG_DIR,
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
    ],
  };
}
