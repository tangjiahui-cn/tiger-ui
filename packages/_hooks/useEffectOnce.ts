import { useEffect } from 'react';
import { UnMountFn } from './useUpdateEffect';

export default function useUpdateEffect(fn: () => void | UnMountFn) {
  useEffect(() => {
    return fn?.();
  }, []);
}
