/**
 * entry point.
 *
 * @Author TangJiaHui
 * @Date 2024/1/19
 */
import { buildUMD } from './buildUMD';
import { buildCJS } from './buildCJS';
import { buildESM } from './buildESM';
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
  throw Error('please change to concurrently build.');
  // buildUMD();
  // buildCJS();
  // buildESM();
}
