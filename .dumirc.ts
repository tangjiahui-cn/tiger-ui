import { defineConfig } from 'dumi';
// @ts-ignore
import path from 'path';

export default defineConfig({
  title: 'tiger-ui',
  outputPath: 'docs-dist',
  themeConfig: {
    logo: false,
    title: 'tiger-ui',
    name: 'tiger-ui',
    footer: false,
    apiHeader: false,
    prefersColor: {
      default: 'light',
      switch: false,
    },
  },
  apiParser: {},
  resolve: {
    docDirs: ['docs'],
    entryFile: path.resolve(__dirname, './packages/index.ts'),
  },
  chainWebpack(memo: any) {
    memo.resolve.alias
      .set('tiger-ui', path.resolve(__dirname, './packages'))
      .set('@', path.resolve(__dirname, './packages'));
  },
});
