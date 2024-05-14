import { defineConfig } from 'dumi';
// @ts-ignore
import path from 'path';
import { NAME } from './scripts/share';
import { DefinePlugin } from 'webpack';

const { deploy } = process.env;
const publicPath = deploy === 'github' ? `/${NAME}/` : '/';

export default defineConfig({
  publicPath,
  base: publicPath,
  title: NAME,
  outputPath: 'docs-dist',
  themeConfig: {
    logo: false,
    title: NAME,
    name: NAME,
    footer: false,
    apiHeader: false,
    prefersColor: {
      default: 'light',
      switch: false,
    },
  },
  resolve: {
    docDirs: ['docs'],
    entryFile: path.resolve(__dirname, './packages/index.ts'),
  },
  chainWebpack(memo) {
    memo.resolve.alias
      .set('tiger-ui', path.resolve(__dirname, './packages'))
      .set('@', path.resolve(__dirname, './packages'));

    memo.plugin('DefinedPlugin').use(DefinePlugin, [
      {
        PACKAGE_NAME: JSON.stringify(NAME),
      },
    ]);
  },
});
