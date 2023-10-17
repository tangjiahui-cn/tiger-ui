import { MutableRefObject, useLayoutEffect, useRef, useState } from 'react';
import * as React from 'react';
import { useStyle } from './style';

export interface Position {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}

interface ToolTipPopupProps {
  visible?: boolean;
  style?: React.CSSProperties;
  baseRef?: MutableRefObject<any>;
  children?: React.ReactNode;
}

export default function ToolTipPopup(props: ToolTipPopupProps) {
  const { visible } = props;
  const style = useStyle('tooltip-overlay');
  const ref = useRef<any>();
  const [position, setPosition] = useState<{ left: number; top: number }>({ left: 0, top: 0 });

  function getPosInfo(ref?: MutableRefObject<any>) {
    return (ref?.current as any)?.getBoundingClientRect();
  }

  useLayoutEffect(() => {
    if (visible) {
      const basePosInfo: Position = getPosInfo(props?.baseRef);
      const posInfo: Position = getPosInfo(ref);

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
      className={style.tooltipOverlay()}
      style={{
        left: position.left,
        top: position.top,
        ...props?.style,
      }}
    >
      {props?.children}
    </div>
  );
}
