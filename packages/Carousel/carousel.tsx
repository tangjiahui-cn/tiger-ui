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
import { omit } from '@/_utils/object';
import './carousel.less';

export type CarouselItem = {
  key: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export type BaseCarouselProps = {
  /**
   * @description 跑马灯面板 （会忽略 children 属性）
   */
  items?: CarouselItem[];
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
  /**
   * @description style
   */
  style?: React.CSSProperties;
  /**
   * @description className
   */
  className?: string;
};

export type BaseCarouselPropsKeys = keyof BaseCarouselProps;
export type CarouselProps = BaseCarouselProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

const privateKeys: BaseCarouselPropsKeys[] = [
  'items',
  'current',
  'autoplay',
  'autoplayDelay',
  'type',
  'style',
  'className',
  'dotStyle',
  'onChange',
  'style',
  'className',
];

export type CarouselFC = React.ForwardRefExoticComponent<CarouselProps> & {
  Item: CarouselItemFC;
};

const Carousel: CarouselFC = React.forwardRef(function (
  props: CarouselProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { autoplayDelay = 2000 } = props;
  const prefix = usePrefix('carousel');
  const originProps: DOMAttributes<HTMLDivElement> = omit(props, privateKeys);

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

  useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

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
      {...originProps}
      ref={containerRef}
      style={props?.style}
      className={classNames(props?.className, prefix)}
    >
      {containerSize && (
        <div
          style={{
            width: containerSize.width * children.length,
            transform: `translate3d(-${containerSize.width * current}px, 0, 0)`,
          }}
          className={`${prefix}-body`}
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
}) as any;

Carousel.Item = CarouselItem;
export default Carousel;
