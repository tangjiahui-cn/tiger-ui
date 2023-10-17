import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { isNumber, range } from '../_utils';
import { useStyle } from './style';

export type SliderValue = number;
export interface SliderProps {
  /**
   * @description 受控值(0-100之间)
   */
  value?: SliderValue;
  /**
   * @description 默认值
   * @default 0
   */
  defaultValue?: SliderValue;
  /**
   * @description 平滑移动
   * @default false
   */
  smooth?: boolean;
  /**
   * @description 组件样式
   */
  style?: React.CSSProperties;
  /**
   * @description 值改变回调
   */
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
  const style = useStyle('slider');

  const isNotControl = props?.value === undefined; // 是否外界受控值

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

      if (isNotControl) {
        trackThumbDomRef.current.style.width = `${percent}%`;
        pointDomRef.current.style.left = `calc(${percent}% - ${halfPointSize}px)`;
      }

      lastPercent = percent;
    }

    function up() {
      if (isNotControl) {
        setEnd(percent);
      }
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
    <div className={style.slider()} style={props?.style}>
      <div
        className={style.sliderTrack()}
        ref={trackDomRef}
        onMouseDown={(e) => {
          const width = trackDomRef.current?.clientWidth || 0;
          const x = range(e.nativeEvent.offsetX, 0, width);
          const percent = getPercent(x, width);
          props?.onChange?.(percent, end);
          if (isNotControl) {
            setEnd(percent);
          }
        }}
      >
        <div
          className={style.sliderTrackThumb()}
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
          className={style.sliderPoint()}
          onMouseDown={handleStartMove}
        />
      </div>
    </div>
  );
}
