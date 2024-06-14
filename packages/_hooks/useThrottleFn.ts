/**
 * useThrottleFn
 *
 * @author tangjiahui
 * @date 2024.06.14
 */
import { throttle, throttleFn, ThrottleOption } from '@/_utils';
import { useMemo } from 'react';

export function useThrottleFn<T = any>(
  callback: throttleFn<T>,
  wait: number,
  option?: ThrottleOption,
): throttleFn<T> {
  return useMemo(() => {
    return throttle(callback, wait, option);
  }, [callback?.toString?.()]);
}
