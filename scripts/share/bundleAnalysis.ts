/**
 * bundle analysis
 *
 * @author tangjiahui
 * @date 2024/3/11
 */
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
import { Configuration } from 'webpack';

export function analysisWebpackBundleTime(webpackConfig: Configuration): Configuration {
  return new SpeedMeasurePlugin().wrap(webpackConfig as any) as any;
}
