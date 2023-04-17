const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const { root } = require('../index');

/**
 * Webpack common config
 */
const PACKAGES = root('packages')

function getCommonConfig (isDev) {
  // compile include packages path.
  const includePkg = isDev ? undefined : PACKAGES

  // css loaders.
  const cssLoaders = [
    // css modules. just for start a local web application.
    isDev && 'style-loader',

    // extract css into a file.
    !isDev && miniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          mode: 'local',
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
  ].filter(Boolean)

  return {
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.less', '.css'],
    },
    performance: {
      hints: false
    },
    module: {
      rules: [
        // css
        {
          include: includePkg,
          test: /\.css/,
          use: cssLoaders
        },
        // less
        {
          include: includePkg,
          test: /\.less$/,
          use: [
            ...cssLoaders,
            'less-loader'
          ]
        },
        // ts
        {
          include: includePkg,
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
          include: includePkg,
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
  }
}

module.exports.getCommonConfig = getCommonConfig
