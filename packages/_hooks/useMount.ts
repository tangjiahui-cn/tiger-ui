/**
 * useMount
 *
 * @author tangjiahui
 * @date 2024/5/27
 * @description run while component mounted.
 */
import { useLayoutEffect } from 'react';

type Callback = () => void | (() => void);
export function useMount(callback: Callback) {
  useLayoutEffect(callback, []);
}
