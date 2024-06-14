/**
 * throttle
 *
 * @author tangjiahui
 * @date 2024/5/27
 */
export type throttleFnClearTimer = (timerId: any) => void;
export type throttleFn<T = unknown> = (arg?: T, clearTimer?: throttleFnClearTimer) => void;

export interface ThrottleOption {
  /** run callback immediately while use throttleFn */
  immediately?: boolean;
  /** run callback immediately while stop throttleFn */
  runAfterStop?: boolean;
}

export function throttle<T>(
  callback: throttleFn<T>,
  wait: number,
  option?: ThrottleOption,
): throttleFn<T> {
  const immediately = option?.immediately ?? true;
  const runAfterStop = option?.runAfterStop ?? true;
  let timeId: any;
  return function (arg?: T, clearTimer?: throttleFnClearTimer) {
    if (timeId) {
      return;
    }
    // @ts-ignore
    const that = this;
    if (immediately) {
      callback.call(that, arg, clearTimer);
    }
    timeId = setTimeout(() => {
      if (runAfterStop) {
        callback.call(that, arg, clearTimer);
      }
      timeId = 0;
    }, wait);
  };
}
