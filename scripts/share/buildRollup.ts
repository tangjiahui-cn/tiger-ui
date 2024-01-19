/**
 * run rollup.
 *
 * @Author TangJiaHui
 * @Date 2024/1/19
 */
import { OutputOptions, rollup, RollupBuild, RollupOptions } from 'rollup';

export function buildRollup(config: RollupOptions) {
  try {
    rollup(config).then((bundle: RollupBuild) => {
      bundle.write(config.output as OutputOptions).then(() => {
        console.log('\nBUILD SUCCESS!\n');
        bundle.close();
        process.exit(0);
      });
    });
  } catch (error) {
    console.error('error: ', error);
    process.exit(1);
  }
}
