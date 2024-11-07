/**
 * dumi
 *
 * @author tangjiahui
 * @date 2024/5/15
 */
import { defineConfig } from 'dumi';
import * as path from 'path';
import { DefinePlugin } from 'webpack';
import * as fs from 'fs';

const NAME = 'tiger-ui';
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
    footer: fs.readFileSync('./footer.html', 'utf-8'),
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
  styles: [fs.readFileSync('./dumi-styles.css', 'utf-8')],
  chainWebpack(memo: any) {
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
