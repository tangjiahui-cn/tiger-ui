/**
 * throttle
 *
 * @author tangjiahui
 * @date 2024/5/27
 */
type throttleFnClearTimer = (timerId: any) => void;
type throttleFn<T = unknown> = (arg?: T, clearTimer?: throttleFnClearTimer) => void;

interface ThrottleOption {
  /** run callback immediately while use throttleFn */
  immediately?: boolean;
}

export function throttle<T>(
  callback: throttleFn<T>,
  wait: number,
  option?: ThrottleOption,
): throttleFn<T> {
  const immediately = option?.immediately ?? true;
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
      if (!immediately) {
        callback.call(that, arg, clearTimer);
      }
      timeId = 0;
    }, wait);
  };
}
