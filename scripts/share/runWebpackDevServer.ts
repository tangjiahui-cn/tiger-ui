/**
 * run webpack-dev-server
 *
 * @author tangjiahui
 * @date 2024/1/25
 */
import { Configuration } from 'webpack';
import { webpack } from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

export function runWebpackDevServer(config: Configuration) {
  const compiler = webpack(config);
  const server = new WebpackDevServer(config.devServer, compiler);
  server.start();
}
