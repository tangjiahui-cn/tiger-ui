import { useEffect, useRef } from 'react';

export default function useUpdateEffect(fn: () => void, effect: any[]) {
  const first = useRef(false);
  useEffect(() => {
    if (!first.current) {
      first.current = true;
      return;
    }
    return fn?.();
  }, effect);
}
