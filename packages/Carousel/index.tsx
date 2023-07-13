import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { SwitchBar, SwitchBarType } from './SwitchBar';
import styles from './index.less';
import { throttle } from 'lodash';
import { useStateWithRef } from '@/_hooks';

type DOMRectWrite = {
  [k in keyof Omit<DOMRect, 'toJSON'>]: number;
};

const INIT_POSITION: DOMRectWrite = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
};

type ObjectType = {
  [k: string]: any;
};

// 比较对象值是否等于初始值
function equalPositionInfo(a: ObjectType, b: ObjectType): boolean {
  const keys = Object.keys(INIT_POSITION);
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    if (a[k] !== b[k]) return false;
  }
  return true;
}

export interface CarouselOption {
  key: string;
  children?: React.ReactNode;
}

export interface CarouselProps {
  // 样式
  style?: React.CSSProperties;
  // 切换样式
  dotStyle?: React.CSSProperties;
  // 切换图标类型
  type?: SwitchBarType;
  // 子页面
  options?: CarouselOption[];
  // 当前页面索引（从0开始）
  current?: number;
  // 自动播放
  autoplay?: boolean;
  // 自动播放延时
  delay?: number;
  // 切换页面回调
  onChange?: (current: number) => void;
}

export default function Carousel(props: CarouselProps) {
  const carouselRef = useRef<any>();
  const [options, setOptions] = useState<CarouselOption[]>([]);
  const isOut = typeof props?.current === 'number';
  const timerIdRef = useRef<any>();

  const [current, setCurrent, currentRef] = useStateWithRef<number>(0);
  const [carouselPosInfo, setCarouselPosInfo] = useState<DOMRectWrite>({ ...INIT_POSITION });

  function handleChange(current: number) {
    props?.onChange?.(current);
    if (isOut) return;
    setCurrent(current);
  }

  useEffect(() => {
    if (Array.isArray(props?.options)) {
      const options = props?.options.filter(Boolean);
      setOptions(options);
      // 解决props?.options 非setState更新导致无法获取高度宽度的问题
      setCarouselPosInfo((info) => {
        const targetInfo = carouselRef.current?.getBoundingClientRect?.();
        if (options?.length && equalPositionInfo(INIT_POSITION, targetInfo)) {
          return info;
        }
        return targetInfo;
      });

      clearInterval(timerIdRef.current);
      if (props?.autoplay) {
        timerIdRef.current = setInterval(() => {
          const last: number = isOut ? props?.current || 0 : currentRef.current;
          const target = (last + 1) % options.length;
          props?.onChange?.(target);
          if (!isOut) {
            setCurrent(target);
          }
        }, props?.delay || 2000);
      }
    }

    return () => clearInterval(timerIdRef.current);
  }, [props?.options]);

  useEffect(() => {
    function resize(e: any) {
      setCarouselPosInfo(carouselRef.current?.getBoundingClientRect?.());
    }
    window.addEventListener(
      'resize',
      throttle(resize, 100, {
        trailing: true,
      }),
    );
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className={styles['carousel']} style={props?.style} ref={carouselRef}>
      <div
        className={styles['carousel-body']}
        style={{
          width: carouselPosInfo.width * options?.length,
          transform: `translate3d(-${carouselPosInfo.width * (props?.current || current)}px, 0, 0)`,
        }}
      >
        {options?.map((x) => {
          return (
            <div
              key={x?.key}
              className={styles['carousel-body-option']}
              style={{ width: carouselPosInfo.width }}
            >
              {x?.children}
            </div>
          );
        })}
      </div>

      <SwitchBar
        type={props?.type}
        current={props?.current || current}
        total={options?.length}
        onChange={handleChange}
        itemStyle={props?.dotStyle}
        style={{
          left: '50%',
          bottom: 16,
          position: 'absolute',
          transform: 'translate3d(-50%, 0, 0)',
        }}
      />
    </div>
  );
}
