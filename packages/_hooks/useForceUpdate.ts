/**
 * useForceUpdate
 *
 * @author tangjiahui
 * @date 2024/5/27
 * @description update current component once.
 */
import { useCallback, useState } from 'react';

export default function useForceUpdate(): () => void {
  const [_, setV] = useState<boolean>(false);
  return useCallback(() => setV((v: boolean) => !v), []);
}
