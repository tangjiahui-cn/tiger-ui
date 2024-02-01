/**
 * Carousel
 *
 * @author tangjiahui
 * @date 2024/01/31
 */
import Item from './Item';
import { useEffect, useRef, useState } from 'react';
import { SwitchBar, SwitchBarType } from './SwitchBar';
import * as React from 'react';
import throttle from 'lodash/throttle';
import { useStyle } from './style';
import { useStateWithRef } from '@/_hooks';

type CarouselItem = {
  key: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export type CarouselProps = {
  /**
   * @description 跑马灯面板 （会忽略 children 属性）
   */
  items?: CarouselItem[];
  /**
   * @description 跑马灯样式
   */
  style?: React.CSSProperties;
  /**
   * @description 当前显示面板（从0开始）
   */
  current?: number;
  /**
   * @description 是否自动播放
   */
  autoplay?: boolean;
  /**
   * @description 自动播放间隔（单位ms）
   * @default: 2000
   */
  autoplayDelay?: number;
  /**
   * @description 操作栏类型
   * @default line
   */
  type?: SwitchBarType;
  /**
   * @description 操作栏样式
   */
  dotStyle?: React.CSSProperties;
  /**
   * @description 切换回调
   */
  onChange?: (current: number) => void;
  /**
   * @description 子元素
   */
  children?: React.ReactElement | React.ReactElement[];
};

Carousel.Item = Item;
export default function Carousel(props: CarouselProps) {
  const { autoplayDelay = 2000 } = props;
  const style = useStyle('carousel');

  // is use current outside.
  const isForceCurrentRef = useRef(props?.current !== undefined);
  // current step (from 0).
  const [current, setCurrent, currentRef] = useStateWithRef<number>(0);
  // container dom reference.
  const containerRef = useRef<HTMLDivElement>(null);
  // container size info.
  const [containerSize, setContainerSize] = useState<
    | {
        width: number;
        height: number;
      }
    | undefined
  >(undefined);

  const timerIdRef = useRef<any>();

  const children: React.ReactElement[] = props?.items?.length
    ? props?.items.map((x) => (
        <Item key={x.key} style={x.style}>
          {x.children}
        </Item>
      ))
    : Array.isArray(props?.children)
    ? props?.children
    : props?.children
    ? [props?.children]
    : [];

  function clearTimer() {
    if (timerIdRef.current) {
      window.clearInterval(timerIdRef.current);
      timerIdRef.current = undefined;
    }
  }

  function handleChange(current: number) {
    props?.onChange?.(current);
    if (!isForceCurrentRef.current) {
      setCurrent(current);
    }
  }

  useEffect(() => {
    // listen window resize, and resize carousel.
    const resize = throttle(() => {
      setContainerSize({
        width: containerRef.current?.clientWidth || 0,
        height: containerRef.current?.clientHeight || 0,
      });
    }, 10);
    setTimeout(resize);
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    clearTimer();
    if (props?.autoplay) {
      // loop.
      timerIdRef.current = setInterval(() => {
        const target = (currentRef.current + 1) % children.length;
        // if control 'current' from outside, don't change ui immediately.
        if (!isForceCurrentRef.current) {
          setCurrent(target);
        }
        // emit outside.
        props?.onChange?.(target);
      }, autoplayDelay);
    }
    return clearTimer;
  }, [props?.autoplay, autoplayDelay]);

  useEffect(() => {
    // sync current.
    if (isForceCurrentRef.current) {
      setCurrent(props?.current || 0);
    }
  }, [props?.current]);

  return (
    <div
      ref={containerRef}
      className={style.carousel()}
      style={{
        ...props?.style,
      }}
    >
      {containerSize && (
        <div
          style={{
            width: containerSize.width * children.length,
            transform: `translate3d(-${containerSize.width * current}px, 0, 0)`,
          }}
          className={style.carouselBody()}
        >
          {children}
        </div>
      )}
      <SwitchBar
        type={props?.type}
        current={current}
        total={children?.length}
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
