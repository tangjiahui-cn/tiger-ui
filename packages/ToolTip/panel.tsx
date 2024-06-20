/**
 * popup panel
 *
 * @author tangjiahui
 * @date 2024/6/17
 */
import { DOMAttributes, MutableRefObject, useEffect, useRef } from 'react';
import { throttle } from '@/_utils';
import { usePrefix } from '@/ConfigProvider';
import classNames from 'classnames';
import './panel.less';

interface PanelProps extends DOMAttributes<HTMLDivElement> {
  /** panel style */
  style?: React.CSSProperties;
  /** panel className */
  className?: string;
  /** triangle style */
  triangleStyle?: React.CSSProperties;
  /** triangle className */
  triangleClassName?: string;
  /** animation duration */
  animationDuration?: number;
  /** panel visible */
  visible?: boolean;
  /** panel content */
  children?: React.ReactNode;
  /** bind target dom */
  targetRef: MutableRefObject<HTMLElement>;
}

export default function Panel(props: PanelProps) {
  const {
    style,
    className,
    triangleStyle,
    triangleClassName,
    animationDuration = 100,
    visible,
    children,
    targetRef,
    ...rest
  } = props;
  const ref = useRef<HTMLDivElement>(null);
  const prefix = usePrefix('tooltip-panel');

  const classes = classNames(prefix, className, {
    [`${prefix}-appear`]: visible,
    [`${prefix}-disappear`]: !visible,
  });

  useEffect(() => {
    const init = throttle(function () {
      if (!targetRef?.current || !ref.current) {
        return;
      }
      const rectInfo = targetRef.current?.getBoundingClientRect?.();
      const { top = 0, left = 0, width = 0 } = rectInfo || {};
      ref.current.style.top = `${top - 14}px`;
      ref.current.style.left = `${left + width / 2}px`;
    }, 10);

    init();
    window.addEventListener('scroll', init);
    return () => {
      window.removeEventListener('scroll', init);
    };
  }, []);

  return (
    <div
      {...rest}
      ref={ref}
      className={classes}
      style={{
        animationDuration: `${animationDuration}ms`,
        ...style,
      }}
    >
      <div style={triangleStyle} className={classNames(`${prefix}-triangle`, triangleClassName)} />
      {children}
    </div>
  );
}
