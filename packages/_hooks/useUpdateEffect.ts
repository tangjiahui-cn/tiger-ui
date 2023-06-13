import { useEffect, useRef } from 'react';

export type UnMountFn = () => void;
export default function useUpdateEffect(fn: () => void | UnMountFn, effect: any[]) {
  const first = useRef(false);
  useEffect(() => {
    if (!first.current) {
      first.current = true;
      return;
    }
    return fn?.();
  }, effect);
}
