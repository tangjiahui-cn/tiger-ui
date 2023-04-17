const path = require('path')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
// const webpackBundleAnalyzer = require('webpack-bundle-analyzer')
const cssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const terserWebpackPlugin = require('terser-webpack-plugin')

/**
 * Webpack build config
 */
const root = (...args) => path.resolve(__dirname, '../../', ...args)

const pkg = require(root('package.json'))
const PACKAGES = root('packages')

module.exports = {
  mode: 'production',
  entry: root('./packages/index.ts'),
  output: {
    clean: true,
    filename: 'index.js',
    library: pkg.name,
    libraryTarget: 'umd',
    globalObject: 'this',
    path: root('lib')
  },
  externals: ['react', 'react-dom'],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css', '.less']
  },
  optimization: {
    minimizer: [
      // // terser css
      // new cssMinimizerWebpackPlugin(),
      // // terser js
      // new terserWebpackPlugin()
    ],
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      // css
      {
        include: PACKAGES,
        test: /\.css/,
        use: [
          miniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                auto: undefined,
                localIdentName: '[local]'
              }
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "autoprefixer"
                ],
              },
            },
          },
        ]
      },
      // less
      {
        include: PACKAGES,
        test: /\.(less|css)$/,
        use: [
          miniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                auto: undefined,
                localIdentName: '[local]'
              }
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "autoprefixer"
                ],
              },
            },
          },
          'less-loader'
        ]
      },
      // ts
      {
        include: PACKAGES,
        test: /\.ts/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
            ]
          }
        }
      },
      // tsx
      {
        include: PACKAGES,
        test: /\.tsx/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: 'index.css',
    })
  ]
}
