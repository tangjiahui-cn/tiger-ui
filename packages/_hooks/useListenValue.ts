import { Dispatch, SetStateAction, useState } from 'react';
import { useUpdateEffect } from './useUpdateEffect';

export function useListenValue<S>(
  initialValue: S,
  listenValue: S,
): [S, Dispatch<SetStateAction<S>>] {
  const [value, setValue] = useState<S>(initialValue);

  useUpdateEffect(() => {
    setValue(listenValue);
  }, [listenValue]);

  return [value, setValue];
}
