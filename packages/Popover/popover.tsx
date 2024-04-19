/**
 * popover
 *
 * @author tangjiahui
 * @date 2023/7/3
 */
import * as React from 'react';
import { RefAttributes, useImperativeHandle, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import PopoverPopup from '@/Popover/PopoverPopup';
import { Space } from '@/index';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import './popover.less';

export interface BasePopoverProps {
  /**
   * @description 标题
   */
  title?: React.ReactNode;
  /**
   * @description 内容
   */
  content?: React.ReactNode;
  /**
   * @description 浮层样式 (同style)
   */
  overlayStyle?: React.CSSProperties;
  /**
   * children
   */
  children?: React.ReactElement;
  /**
   * @description style
   */
  style?: React.CSSProperties;
  /**
   * @description className
   */
  className?: string;
}

export type PopoverProps = BasePopoverProps & RefAttributes<HTMLDivElement>;

type PopoverFC = React.FC<PopoverProps>;
const Popover: PopoverFC = React.forwardRef(function (
  props: PopoverProps,
  domRef: React.ForwardedRef<HTMLDivElement>,
) {
  const [visible, setVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const prefix = usePrefix('popover');

  useImperativeHandle(domRef, () => ref.current as HTMLDivElement);

  return (
    <>
      {props?.children &&
        React.cloneElement(props?.children, {
          ref,
          onMouseEnter() {
            setVisible(true);
          },
          onMouseLeave() {
            setVisible(false);
          },
        })}
      {visible &&
        ReactDOM.createPortal(
          <PopoverPopup
            baseRef={ref}
            visible={visible}
            style={{
              ...props?.overlayStyle,
              ...props?.style,
            }}
            className={props?.className}
          >
            <Space direction={'vertical'}>
              {props?.title && <div className={`${prefix}-title`}>{props?.title}</div>}
              {props?.content && <div>{props?.content}</div>}
            </Space>
          </PopoverPopup>,
          document.body,
        )}
    </>
  );
});

export default Popover;
