/**
 * useUpdateEffect
 *
 * @author tangjiahui
 * @date 2024/1/26
 */
import { useEffect, useRef } from 'react';

export type UnMountFn = () => void;
export function useUpdateEffect(fn: () => void | UnMountFn, effect?: any[]) {
  const first = useRef(false);
  useEffect(() => {
    if (!first.current) {
      first.current = true;
      return;
    }
    return fn?.();
  }, effect);
}
