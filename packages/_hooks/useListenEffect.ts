/**
 * useListenEffect
 *
 * @author tangjiahui
 * @date 2024/1/26
 * @description extend useEffect，give params: isFirst
 */
import { useEffect, useRef } from 'react';

export type ListenDependencyList = readonly unknown[];
export type ListenEffectCallback = (isFirst: boolean) => void | ((...args: any) => void);
export function useListenEffect(callback: ListenEffectCallback, effect: ListenDependencyList) {
  const isFirst = useRef(true);

  useEffect(() => {
    const result = callback(isFirst.current);
    isFirst.current = false;
    return result;
  }, effect);
}
