/**
 * useStateWithRef
 *
 * @author tangjiahui
 * @date 2023.01.04
 */
import { Dispatch, MutableRefObject, SetStateAction, useRef, useState } from 'react';

export function useStateWithRef<T>(
  initialState: T | (() => T),
): [T, Dispatch<SetStateAction<T>>, MutableRefObject<T>] {
  const [value, setValue] = useState<T>(initialState);
  const valueRef = useRef<T>(value);
  valueRef.current = value;

  return [value, setValue, valueRef];
}
