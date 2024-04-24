import * as React from 'react';
import { MouseEvent, MutableRefObject, useLayoutEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { usePrefix } from '@/ConfigProvider/context/prefixContext';
import './popover.less';

interface PopoverPopupProps {
  baseRef?: MutableRefObject<any>;
  visible?: boolean;
  style?: React.CSSProperties;
  children?: any;
  onMouseEnter?: (e: MouseEvent<any>) => void;
  onMouseLeave?: (e: MouseEvent<any>) => void;
  className?: string;
}

export default function PopoverPopup(props: PopoverPopupProps) {
  const { visible } = props;
  const prefix = usePrefix('popover');
  const ref = useRef<any>();
  const [position, setPosition] = useState<{ left: number; top: number }>({ left: 0, top: 0 });

  function getPosInfo(ref?: MutableRefObject<any>) {
    return (ref?.current as any)?.getBoundingClientRect();
  }

  useLayoutEffect(() => {
    if (visible) {
      const basePosInfo: DOMRect = getPosInfo(props?.baseRef);
      const posInfo: DOMRect = getPosInfo(ref);

      const baseWidthHalf = basePosInfo.width / 2;
      const posWidthHalf = posInfo.width / 2;

      setPosition({
        top: basePosInfo.top - posInfo.height - 4,
        left: basePosInfo.left - (posWidthHalf - baseWidthHalf),
      });
    }
  }, [visible]);

  return (
    <div
      ref={ref}
      className={classNames(prefix, props?.className)}
      style={{
        left: position.left,
        top: position.top,
        ...props?.style,
      }}
      onMouseOver={props?.onMouseEnter}
      onMouseLeave={props?.onMouseLeave}
    >
      {props?.children}
    </div>
  );
}
