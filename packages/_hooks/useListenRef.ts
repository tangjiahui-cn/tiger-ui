/**
 * useListenRef
 *
 * @author tangjiahui
 * @date 2024/6/20
 */
import { useRef, useEffect } from 'react';

export function useListenRef<S>(value: S) {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
}
