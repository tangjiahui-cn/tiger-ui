const miniCssExtractPlugin = require('mini-css-extract-plugin');
const { root, NAME } = require('../index');
const alias = require('../share/alias');

/**
 * Webpack common config
 */
const PACKAGES = root('packages');

function getCommonConfig(__DEV__) {
  // compile include packages path.
  const includePkg = __DEV__ ? undefined : PACKAGES;

  // css loaders.
  const cssLoaders = [
    // css modules. just for start a local web application.
    __DEV__ && 'style-loader',

    // extract css into .css file.
    !__DEV__ && miniCssExtractPlugin.loader,
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
  ].filter(Boolean);

  // babel-import-plugins
  const babelAutoImport = [
    'import',
    {
      libraryName: NAME,
      libraryDirectory: 'lib',
      style: (pkgName) => pkgName,
      styleLibraryDirectory: 'lib',
      camel2DashComponentName: false,
    },
  ];

  const babelLoaderPlugins = __DEV__ ? undefined : [babelAutoImport];

  return {
    resolve: {
      alias,
      extensions: ['.js', '.ts', '.tsx', '.less', '.css'],
    },
    performance: {
      hints: false,
    },
    module: {
      rules: [
        // css
        {
          include: includePkg,
          test: /\.css/,
          use: cssLoaders,
        },
        // less
        {
          include: includePkg,
          test: /\.less$/,
          use: [...cssLoaders, 'less-loader'],
        },
        // ts
        {
          include: includePkg,
          test: /\.ts/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: babelLoaderPlugins,
              presets: ['@babel/preset-env', '@babel/preset-typescript'],
            },
          },
        },
        // tsx
        {
          include: includePkg,
          test: /\.tsx/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: babelLoaderPlugins,
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
        },
      ],
    },
  };
}

module.exports.getCommonConfig = getCommonConfig;
