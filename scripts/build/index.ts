/**
 * entry point.
 *
 * @Author TangJiaHui
 * @Date 2024/1/19
 */
import { buildUMD } from './buildUMD';
import { buildCJS } from './buildCJS';
import { buildESM } from './buildESM';
import concurrently from 'concurrently';
const { target } = process.env;

if (target === 'umd') {
  buildUMD();
}

if (target === 'cjs') {
  buildCJS();
}

if (target === 'esm') {
  buildESM();
}

if (target === 'all') {
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
}
