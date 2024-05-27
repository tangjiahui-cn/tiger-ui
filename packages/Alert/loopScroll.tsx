/**
 * LoopScroll
 *
 * @author tangjiahui
 * @date 2024/5/27
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { throttle } from '@/_utils';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import './loopScroll.less';

export interface LoopScrollProps {
  /**
   * pause move while mouse hover the text
   * @default true
   * */
  pauseOnHover?: boolean;
  /** time of one circle, which unit is "ms"  */
  animationDuration?: number;
  /** the throttle delay of resize component, which unit is "ms" */
  resizeDelay?: number;
  /** className */
  className?: string;
  /** style */
  style?: React.CSSProperties;
  /** scroll child */
  children?: React.ReactNode;
  /** mouse enter event */
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  /** mouse leave event */
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

export default function LoopScroll(props: LoopScrollProps) {
  const {
    pauseOnHover = true,
    animationDuration = 10000,
    resizeDelay = 5,
    children,
    className,
    style,
    onMouseEnter,
    onMouseLeave,
    ...rest
  } = props;

  const prefix = usePrefix('loopScroll');
  const containerRef = useRef<HTMLDivElement>(null);

  const [isHover, setIsHover] = useState(false);
  const [containerRect, setContainerRect] = useState<DOMRect>();

  const innerContainerWidth: number = useMemo(
    () => (containerRect?.width || 0) * 2,
    [containerRect],
  );

  const bodyNode: React.ReactNode = (
    <div className={`${prefix}-body`} style={{ width: containerRect?.width }}>
      {props?.children}
    </div>
  );

  useEffect(() => {
    const resize = throttle(() => {
      const containerRect = containerRef.current?.getBoundingClientRect?.();
      setContainerRect(containerRect);
    }, resizeDelay);

    setTimeout(resize);
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div
      {...rest}
      style={props?.style}
      className={classNames(prefix, props?.className)}
      ref={containerRef}
      onMouseEnter={(e) => {
        pauseOnHover && setIsHover(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        pauseOnHover && setIsHover(false);
        onMouseLeave?.(e);
      }}
    >
      <div
        style={{
          width: innerContainerWidth,
          animationDuration: `${animationDuration}ms`,
        }}
        className={classNames(`${prefix}-inner`, isHover && `${prefix}-inner-paused`)}
      >
        {bodyNode}
        {/* After mounted, set second body node */}
        {containerRect && bodyNode}
      </div>
    </div>
  );
}
