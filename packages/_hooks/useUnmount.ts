/**
 * unmount hook.
 *
 * @author tangjiahui
 * @date 2024/02/01
 */
import { useEffect } from 'react';

type Callback = (...args: any) => void;
export function useUnmount(callback: Callback) {
  useEffect(() => {
    return callback;
  }, []);
}
