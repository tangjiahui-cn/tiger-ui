/**
 * entry point.
 *
 * @Author TangJiaHui
 * @Date 2024/1/19
 */
import configCJS from './configCJS';
import configUMD from './configUMD';
import configESM from './configESM';
import concurrently from 'concurrently';
const { target } = process.env;

let config;
switch (target) {
  case 'cjs':
    config = configCJS;
    break;
  case 'umd':
    config = configUMD;
    break;
  case 'esm':
    config = configESM;
    break;
  case 'all':
    const targetList = ['umd', 'cjs', 'esm'];
    concurrently(
      targetList.map((target) => {
        return {
          command: `pnpm build:${target}`,
          name: target,
        };
      }),
    ).result.then(() => {
      console.log(`---> BUILD All SUCCESS! (${targetList.join(',')})`);
    });
    break;
  default:
    throw new Error(`target: ${target} is not support!`);
}

export default config;
