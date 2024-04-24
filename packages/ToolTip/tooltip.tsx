/**
 * tooltip
 *
 * @author tangjiahui
 * @date 2024/02/02
 */
import React, { DOMAttributes, ForwardedRef, RefAttributes } from 'react';
import { useMountDom } from '@/_hooks';
import { CaretDownOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import { omit } from '@/_utils/object';
import './tooltip.less';

export type BaseToolTipProps = {
  /**
   * @description 标题
   */
  title?: React.ReactNode;
  /**
   * style
   */
  style?: React.CSSProperties;
  /**
   * className
   */
  className?: string;
  /**
   * @description 包裹子元素
   */
  children?: React.ReactElement | string;
};

export type BaseToolTipKeys = keyof BaseToolTipProps;
export type ToolTipProps = BaseToolTipProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

const privateKeys: BaseToolTipKeys[] = ['children', 'title', 'style', 'className'];
export type ToolTipFC = React.ForwardRefExoticComponent<ToolTipProps>;
const ToolTip: ToolTipFC = React.forwardRef(function ToolTip(
  props: ToolTipProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  if (!props?.children) return;
  if (Array.isArray(props?.children)) {
    throw new Error('children must be a single react element.');
  }

  const prefix = usePrefix('tooltip');
  const originProps: DOMAttributes<HTMLDivElement> = omit(props, privateKeys);

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
          {...originProps}
          className={classNames(props?.className, prefix)}
          ref={ref}
          style={{
            top: domRect.top,
            left: domRect.left + domRect.width / 2,
            ...props?.style,
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
    {
      delay: 200,
    },
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
});

export default ToolTip;
