/**
 * generate a uuid.
 *
 * @author tangjiahui
 * @date 2024/8/8
 */
import { useMemo } from 'react';
import { range } from '@/_utils';

export function useUUID(length: number) {
  return useMemo(() => {
    length = range(length, 1, 11);
    return Math.random().toString(36).substring(2).slice(0, length);
  }, []);
}
