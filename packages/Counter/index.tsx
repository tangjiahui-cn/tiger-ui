import React, { useEffect, useRef, useState } from 'react';
import { useStyle } from './style';

export interface CounterProps {
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
   * @description 样式
   */
  style?: React.CSSProperties;
}

/**
 * 计数器
 */
export default function Counter(props: CounterProps) {
  const { duration = 2000, timeSplit = 20, start = 0, end = 0 } = props;
  const [value, setValue] = useState<number | null>(null);
  const timeId = useRef<any>();
  const style = useStyle('count');

  function startAnimation(startValue: number, endValue: number) {
    const _timeSplit = Math.min(timeSplit, duration);
    lineAnimation(startValue, endValue, duration, _timeSplit);
  }

  /**
   * 线性动画
   *
   * @param min 最小值
   * @param max 最大值
   * @param duration 动画总时长
   * @param timeSplit 间隔变化时间
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
          setValue(values.shift() || 0);
          start(values, timeout);
        }, timeout);
      }
    }

    start(values, timeSplit);
  }

  useEffect(() => {
    startAnimation(start, end);

    return () => {
      timeId.current && clearTimeout(timeId.current);
    };
  }, [start, end]);

  return (
    <div className={style.counter()} style={props?.style}>
      {value}
    </div>
  );
}
