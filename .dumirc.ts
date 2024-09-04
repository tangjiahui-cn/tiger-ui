/**
 * dumi
 *
 * @author tangjiahui
 * @date 2024/5/15
 */
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
    footer: `<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2024117433号-1</a>`,
    apiHeader: false,
    prefersColor: {
      default: 'light',
      switch: false,
    },
    socialLinks: {
      github: 'https://github.com/tangjiahui-cn/tiger-ui',
    },
  },
  resolve: {
    docDirs: ['docs'],
    entryFile: path.resolve(__dirname, './packages/index.ts'),
  },
  styles: [`[class*='dumi'] p {font-size:0.875em;}`],
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
