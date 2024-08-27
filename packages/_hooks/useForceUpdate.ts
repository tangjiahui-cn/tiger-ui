/**
 * useForceUpdate
 *
 * @author tangjiahui
 * @date 2024/5/27
 * @description update current component once.
 */
import { useReducer } from 'react';

export function useForceUpdate(): () => void {
  return useReducer((v) => !v, false)[1];
}
