/**
 * useEffectOnce
 *
 * @author tangjiahui
 * @date 2024/1/26
 */
import { useEffect } from 'react';
import { UnMountFn } from './useUpdateEffect';

export function useEffectOnce(fn: () => void | UnMountFn) {
  useEffect(() => {
    return fn?.();
  }, []);
}
