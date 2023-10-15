import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import useToken from '../_utils/hooks/useToken';

interface IProps {
  // 浮层出现触发聚焦
  visible?: boolean;
  // 浮层样式
  style?: React.CSSProperties;
  // 点击外部区域
  onClickOut?: () => void;
  // 子元素
  children?: React.ReactNode;
}
export default function (props: IProps) {
  const ref = useRef<HTMLDivElement>();
  const token = useToken();

  useEffect(() => {
    function pointerdown() {
      props?.onClickOut?.();
    }

    function mouseleave() {
      window.addEventListener('pointerdown', pointerdown);
    }

    function mouseenter() {
      window.removeEventListener('pointerdown', pointerdown);
    }

    window.addEventListener('pointerdown', pointerdown);
    ref.current?.addEventListener('mouseleave', mouseleave);
    ref.current?.addEventListener('mouseenter', mouseenter);

    return () => {
      ref.current?.removeEventListener('mouseleave', mouseleave);
      ref.current?.removeEventListener('mouseenter', mouseenter);
      window.removeEventListener('pointerdown', pointerdown);
    };
  }, [props?.visible]);

  return ReactDOM.createPortal(
    props?.visible ? (
      <div
        ref={ref as any}
        style={{
          boxShadow: token.shadow2,
          outline: 'none',
          overflow: 'hidden',
          position: 'absolute',
          transition: `height ${token.duration}`,
          maxHeight: 325,
          overflowY: 'auto',
          ...props?.style,
        }}
      >
        {props?.children}
      </div>
    ) : null,
    document.body,
  );
}
