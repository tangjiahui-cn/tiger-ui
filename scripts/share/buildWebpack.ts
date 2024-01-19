/**
 * run webpack.
 *
 * @Author TangJiaHui
 * @Date 2024/1/19
 */
import { webpack, Configuration } from 'webpack';

export function buildWebpack(config: Configuration) {
  webpack(config).run((error) => {
    if (error) {
      console.error('error: ', error);
    } else {
      console.log('\nBUILD SUCCESS!\n');
    }
  });
}
