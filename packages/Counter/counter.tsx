/**
 * Counter
 *
 * @author tangjiahui
 * @date 2023/6/28
 */
import React, {
  DOMAttributes,
  ForwardedRef,
  RefAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { omit } from '@/_utils/object';
import classNames from 'classnames';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import './counter.less';

export interface BaseCounterProps {
  /**
   * @description 开始值
   */
  start?: number;
  /**
   * @description 结束值
   */
  end?: number;
  /**
   * @description 总动画时长（单位: ms）
   * @default 2000
   */
  duration?: number;
  /**
   * @description 数字变化时间间隔（值越小，数值跳动越快）
   * @default 20
   */
  timeSplit?: number;
  /**
   * @description style
   */
  style?: React.CSSProperties;
  /**
   * @description className
   */
  className?: string;
}

export type CounterRefType = {
  dom: HTMLDivElement | null;
  replay: () => void;
};

export type BaseCounterPropsKeys = keyof BaseCounterProps;
export type CounterProps = BaseCounterProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<CounterRefType>;

const privateKeys: BaseCounterPropsKeys[] = [
  'start',
  'end',
  'duration',
  'timeSplit',
  'style',
  'className',
];

export type CounterFC = React.ForwardRefExoticComponent<CounterProps>;
const Counter: CounterFC = React.forwardRef(function (
  props: CounterProps,
  ref: React.ForwardedRef<CounterRefType>,
) {
  const { duration = 2000, timeSplit = 20, start = 0, end = 0 } = props;
  const [value, setValue] = useState<number | null>(null);
  const timeId = useRef<any>();
  const originProps: DOMAttributes<HTMLDivElement> = omit(props, privateKeys);
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
    <div
      {...originProps}
      className={classNames(prefix, props?.className)}
      style={props?.style}
      ref={domRef}
    >
      {value}
    </div>
  );
});
export default Counter;
