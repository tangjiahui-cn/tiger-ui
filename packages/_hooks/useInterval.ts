/**
 * useInterval
 *
 * @author tangjiahui
 * @date 2024/8/7
 * @param callback run callback
 * @param interval run interval
 */
import { useEffect, useMemo, useRef } from 'react';

export function useInterval(callback: () => void, interval: number) {
  const timerId = useRef<any>();

  const opt = useMemo(() => {
    return {
      pause() {
        clearInterval(timerId.current);
        timerId.current = null;
      },
      // if already run, skip.
      run() {
        if (timerId.current) return;
        timerId.current = setInterval(callback, interval);
      },
      // if already run, close the interval before, and start new interval.
      forceRun() {
        if (timerId.current) {
          clearInterval(timerId.current);
        }
        timerId.current = setInterval(callback, interval);
      },
    };
  }, []);

  useEffect(() => {
    opt.forceRun();
    return () => opt.pause();
  }, []);

  return opt;
}
