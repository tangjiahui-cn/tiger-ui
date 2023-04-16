const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/**
 * project root directory path.
 */
const rootPath = pathName => path.resolve(__dirname, '../../', pathName)

module.exports = {
  mode: 'development',
  entry: rootPath('./examples/src/index.tsx'),
  devServer: {
    open: true,
    port: 10000,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.less', '.css'],
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          'style-loader',
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
          'less-loader'
        ]
      },
      {
        test: /\.(ts|tsx)/,
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
    new HtmlWebpackPlugin({
      template: rootPath('./examples/public/index.html'),
    })
  ]
}
