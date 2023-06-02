import * as React from 'react';
import styles from './index.less';
import { useEffect, useRef, useState } from 'react';
import { isNumber, range } from '@/_utils';

export type SliderValue = number;
export interface SliderProps {
  // 值 (0-100之间)
  value?: SliderValue;
  // 默认值
  defaultValue?: SliderValue;
  // 无极滑动
  smooth?: boolean;
  // 滑动输入条样式
  style?: React.CSSProperties;
  // 值改变回调
  onChange?: (value?: SliderValue, preValue?: SliderValue) => void;
}

const pointSize = 14;
const halfPointSize = pointSize / 2;

export default function Slider(props: SliderProps) {
  const { smooth = false, defaultValue = 0 } = props;
  const [end, setEnd] = useState<number>(defaultValue);
  const trackDomRef = useRef<any>(null);
  const trackThumbDomRef = useRef<any>(null);
  const pointDomRef = useRef<any>(null);

  function getPercent(x: number, width: number) {
    const percent = (range(x, 0, width) / width) * 100;
    return smooth ? percent : Math.round(percent);
  }

  function handleStartMove(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    const width = trackDomRef.current?.clientWidth || 0;
    const pointX = pointDomRef.current.offsetLeft + halfPointSize;
    const startX = e.pageX;
    let percent: number = end;
    let lastPercent: number = percent;

    function move(e: PointerEvent) {
      const delta: number = e.pageX - startX;
      const x: number = pointX + delta;
      percent = getPercent(x, width);

      if (percent === lastPercent) return;
      props?.onChange?.(percent, lastPercent);

      if (!isNumber(props?.value)) {
        trackThumbDomRef.current.style.width = `${percent}%`;
        pointDomRef.current.style.left = `calc(${percent}% - ${halfPointSize}px)`;
      }

      lastPercent = percent;
    }

    function up() {
      setEnd(percent);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    }

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  }

  useEffect(() => {
    if (isNumber(props?.value)) {
      setEnd(props?.value || 0);
    }
  }, [props?.value]);

  return (
    <div className={styles['slider']} style={props?.style}>
      <div
        className={styles['slider-track']}
        ref={trackDomRef}
        onMouseDown={(e) => {
          const width = trackDomRef.current?.clientWidth || 0;
          const x = range(e.nativeEvent.offsetX, 0, width);
          const percent = getPercent(x, width);
          props?.onChange?.(percent, end);
          if (!isNumber(props?.value)) {
            setEnd(percent);
          }
        }}
      >
        <div
          className={styles['slider-track-thumb']}
          ref={trackThumbDomRef}
          style={{ width: `${end}%` }}
        />
        <div
          ref={pointDomRef}
          style={{
            width: pointSize,
            height: pointSize,
            left: `calc(${end}% - ${halfPointSize}px)`,
          }}
          className={styles['slider-point']}
          onMouseDown={handleStartMove}
        />
      </div>
    </div>
  );
}
