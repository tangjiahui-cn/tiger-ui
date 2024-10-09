/**
 * build umd bundle.
 *
 * @author tangjiahui
 * @date 2024/10/8
 */
import webpack, { ProvidePlugin, DefinePlugin } from 'webpack';
import { WebpackConfiguration } from 'webpack-cli';
import { PKG_DIR, PKG_NAME, root } from './gulpfile';
import WebpackBar from 'webpackbar';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import CssMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin';
import { rimrafSync } from 'rimraf';

const UMD_DIR = root('umd');
const config: WebpackConfiguration = {
  mode: 'production',
  entry: root('packages/index.ts'),
  output: {
    filename: 'index.min.js',
    path: UMD_DIR,
    library: {
      name: PKG_NAME,
      type: 'umd',
    },
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '...'],
    alias: {
      '@': PKG_DIR,
    },
  },
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
  optimization: {
    minimizer: [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin({
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react',
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                    targets: {
                      browsers: [
                        '> 0.5%',
                        'last 2 versions',
                        'Firefox ESR',
                        'not dead',
                        'not IE 11',
                      ],
                    },
                  },
                ],
                '@babel/preset-typescript',
              ],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              additionalData: `@packageName:${PKG_NAME};`,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.min.css',
    }),
    new WebpackBar({
      color: '#c01bee',
      basic: true,
      profile: true,
    }),
    new ProvidePlugin({
      React: 'react',
    }),
    new DefinePlugin({
      PACKAGE_NAME: JSON.stringify(PKG_NAME),
    }),
  ],
};

export async function buildUmdBundle() {
  return new Promise<void>((resolve, reject) => {
    rimrafSync(UMD_DIR);
    webpack(config, (err: any, stats: any) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }

      const info = stats.toJson();
      if (stats.hasErrors()) {
        (info.errors || []).forEach((error: any) => {
          console.error(error?.message);
        });
        reject(err);
        return;
      }
      console.log('build success');
      resolve();
    });
  });
}

if (process.env.mode === 'unpkg') {
  buildUmdBundle();
}
