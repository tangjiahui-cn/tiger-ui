/**
 * Counter
 *
 * @author tangjiahui
 * @date 2023/6/28
 */
import React, {
  DOMAttributes,
  RefAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import './counter.less';

export interface BaseCounterProps {
  /** start count */
  start?: number;
  /** end count */
  end?: number;
  /** animation total time (unit: ms) */
  duration?: number;
  /** count change time interval (unit: ms) */
  timeSplit?: number;
  /** style */
  style?: React.CSSProperties;
  /** className */
  className?: string;
}

export type CounterRefType = {
  dom: HTMLDivElement | null;
  replay: () => void;
};

export type CounterProps = BaseCounterProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<CounterRefType>;

export type CounterFC = React.ForwardRefExoticComponent<CounterProps>;
const Counter: CounterFC = React.forwardRef(function (
  props: CounterProps,
  ref: React.ForwardedRef<CounterRefType>,
) {
  const { duration = 2000, timeSplit = 20, start = 0, end = 0, style, className, ...rest } = props;
  const [value, setValue] = useState<number | null>(null);
  const timeId = useRef<any>();
  const prefix = usePrefix('counter');
  const domRef = useRef<HTMLDivElement>(null);

  function startAnimation(startValue: number, endValue: number) {
    if (timeId.current) {
      clearTimeout(timeId.current);
      timeId.current = null;
    }
    const _timeSplit = Math.min(timeSplit, duration);
    lineAnimation(startValue, endValue, duration, _timeSplit);
  }

  /**
   * line animation
   *
   * @param min min-value
   * @param max max-value
   * @param duration total animation time
   * @param timeSplit animation frame per time-split.
   */
  function lineAnimation(min: number, max: number, duration: number, timeSplit: number) {
    // exchange min and max.
    if (min > max) {
      let temp = min;
      min = max;
      max = temp;
    }

    // no change.
    if (min === max) {
      setValue(min);
      return;
    }

    const addition = Math.ceil((max - min) / (duration / timeSplit));
    const values: number[] = [];

    while (min < max) {
      min += addition;
      values.push(Math.floor(Math.min(min, max)));
    }

    function start(values: number[], timeout: number) {
      if (values.length) {
        timeId.current = setTimeout(() => {
          if (!values?.length) {
            timeId.current = null;
            return;
          }
          setValue(values.shift() || 0);
          start(values, timeout);
        }, timeout);
      }
    }

    start(values, timeSplit);
  }

  useImperativeHandle(ref, () => {
    return {
      replay() {
        startAnimation(start, end);
      },
      dom: domRef.current,
    };
  });

  useEffect(() => {
    startAnimation(start, end);

    return () => {
      timeId.current && clearTimeout(timeId.current);
    };
  }, [start, end]);

  return (
    <div {...rest} className={classNames(prefix, className)} style={style} ref={domRef}>
      {value}
    </div>
  );
});
export default Counter;
