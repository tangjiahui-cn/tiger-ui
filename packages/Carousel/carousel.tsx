/**
 * Carousel
 *
 * @author tangjiahui
 * @date 2024/01/31
 */
import * as React from 'react';
import { SwitchBarType } from './components/SwitchBar';
import CarouselItem, { CarouselItemFC } from './carouseltem';
import {
  DOMAttributes,
  ForwardedRef,
  RefAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useStateWithRef } from '@/_hooks';
import Item from './carouseltem';
import throttle from 'lodash/throttle';
import SwitchBar from './components/SwitchBar';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import classNames from 'classnames';
import './carousel.less';
import { resizeEl } from '@/_utils';

export type CarouselItem = {
  key: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export type BaseCarouselProps = {
  /** panel items */
  items?: CarouselItem[];
  /** current panel (start from 0) */
  current?: number;
  /** if autoplay */
  autoplay?: boolean;
  /** play delay time */
  autoplayDelay?: number;
  /** operate bar type */
  type?: SwitchBarType;
  /** operte bar style */
  dotStyle?: React.CSSProperties;
  /**
   * @description 切换回调
   */
  onChange?: (current: number) => void;
  /** children */
  children?: React.ReactElement | React.ReactElement[];
  /** style */
  style?: React.CSSProperties;
  /** className */
  className?: string;
};

export type CarouselProps = BaseCarouselProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

export type CarouselFC = React.ForwardRefExoticComponent<CarouselProps> & {
  Item: CarouselItemFC;
};

const Carousel: CarouselFC = React.forwardRef(function (
  props: CarouselProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {
    autoplayDelay = 2000,
    items,
    current: propsCurrent,
    autoplay,
    type,
    style,
    className,
    dotStyle,
    onChange,
    children,
    ...rest
  } = props;
  const prefix = usePrefix('carousel');

  // is use current outside.
  const isForceCurrentRef = useRef(propsCurrent !== undefined);
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

  useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

  const timerIdRef = useRef<any>();

  const childrenList: React.ReactElement[] = items?.length
    ? items.map((x) => (
        <Item key={x.key} style={x.style}>
          {x.children}
        </Item>
      ))
    : Array.isArray(children)
    ? children
    : children
    ? [children]
    : [];

  function clearTimer() {
    if (timerIdRef.current) {
      window.clearInterval(timerIdRef.current);
      timerIdRef.current = undefined;
    }
  }

  function handleChange(current: number) {
    onChange?.(current);
    if (!isForceCurrentRef.current) {
      setCurrent(current);
    }
  }

  useEffect(() => {
    const resize = throttle((domRect: DOMRect) => {
      setContainerSize({
        width: domRect.width,
        height: domRect.height,
      });
    }, 10);
    return resizeEl(containerRef.current!, resize);
  }, []);

  useEffect(() => {
    clearTimer();
    if (autoplay) {
      // loop.
      timerIdRef.current = setInterval(() => {
        const target = (currentRef.current + 1) % childrenList.length;
        // if control 'current' from outside, don't change ui immediately.
        if (!isForceCurrentRef.current) {
          setCurrent(target);
        }
        // emit outside.
        onChange?.(target);
      }, autoplayDelay);
    }
    return clearTimer;
  }, [autoplay, autoplayDelay]);

  useEffect(() => {
    // sync current.
    if (isForceCurrentRef.current) {
      setCurrent(current || 0);
    }
  }, [current]);

  return (
    <div {...rest} ref={containerRef} style={style} className={classNames(className, prefix)}>
      {containerSize && (
        <div
          style={{
            width: containerSize.width * childrenList.length,
            transform: `translate3d(-${containerSize.width * current}px, 0, 0)`,
          }}
          className={`${prefix}-body`}
        >
          {childrenList}
        </div>
      )}

      <SwitchBar
        type={type}
        current={current}
        total={childrenList?.length}
        onChange={handleChange}
        itemStyle={dotStyle}
        style={{
          left: '50%',
          bottom: 16,
          position: 'absolute',
          transform: 'translate3d(-50%, 0, 0)',
        }}
      />
    </div>
  );
}) as any;

Carousel.Item = CarouselItem;
export default Carousel;
