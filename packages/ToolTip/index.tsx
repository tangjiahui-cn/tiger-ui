/**
 * tooltip
 *
 * @author tangjiahui
 * @date 2024/02/02
 */
import React, { DOMAttributes } from 'react';
import { useMountDom } from '@/_hooks';
import { CaretDownOutlined } from '@ant-design/icons';

export type ToolTipProps = {
  /**
   * @description 标题
   */
  title?: React.ReactNode;
  /**
   * @description 浮层样式
   */
  style?: React.CSSProperties;
  /**
   * @description 包裹子元素
   */
  children?: React.ReactElement | string;
};

export default function ToolTip(props: ToolTipProps) {
  if (!props?.children) return;
  if (Array.isArray(props?.children)) {
    throw new Error('children must be a single react element.');
  }

  const children: React.ReactElement =
    typeof props?.children === 'string' ? <span>{props?.children}</span> : props?.children;

  const operateRef = useMountDom(
    document.body,
    (domRect?: DOMRect) => {
      if (!domRect) return;

      const events: DOMAttributes<unknown> = {
        onMouseEnter() {
          operateRef.current.cancelWillUnMount?.();
        },
        onMouseLeave() {
          operateRef.current.willUnMount?.();
        },
      };

      // TODO: rewrite style.
      return (
        <div
          style={{
            position: 'absolute',
            top: domRect.top,
            left: domRect.left + domRect.width / 2,
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              transform: 'translate(-50%, -100%)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                whiteSpace: 'nowrap',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* content */}
              <div
                style={{
                  background: 'rgba(0,0,0,0.8)',
                  color: 'whitesmoke',
                  padding: '8px 6px',
                  ...props?.style,
                }}
                {...events}
              >
                {props?.title}
              </div>

              {/* icon */}
              <CaretDownOutlined
                style={{
                  marginTop: -4,
                }}
              />
            </div>
          </div>
        </div>
      );
    },
    200,
  );

  return React.cloneElement(children, {
    onMouseEnter(e: MouseEvent) {
      const domRect: DOMRect = (e.target as HTMLElement).getBoundingClientRect();
      operateRef.current.cancelWillUnMount?.();
      operateRef.current.mount?.(domRect);
      children?.props?.onMouseEnter?.(e);
    },
    onMouseLeave(e: MouseEvent) {
      operateRef.current?.willUnMount?.();
      children?.props?.onMouseLeave?.(e);
    },
  });
}
