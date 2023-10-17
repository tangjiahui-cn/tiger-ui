import * as React from 'react';
import { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import PopoverPopup from '../Popover/PopoverPopup';
import { Space } from '..';
import { useStyle } from './style';

export interface PopoverProps {
  /**
   * @description 标题
   */
  title?: React.ReactNode;
  /**
   * @description 内容
   */
  content?: React.ReactNode;
  /**
   * @description 浮层样式
   */
  overlayStyle?: React.CSSProperties;
  /**
   * @description 子元素
   */
  children?: React.ReactElement;
}

export default function Popover(props: PopoverProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const ref = useRef();
  const style = useStyle('popover');

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
          <PopoverPopup baseRef={ref} visible={visible} style={props?.overlayStyle}>
            <Space direction={'vertical'}>
              {props?.title && <div className={style.popoverOverlayTitle()}>{props?.title}</div>}
              {props?.content && (
                <div className={style.popoverOverlayContent()}>{props?.content}</div>
              )}
            </Space>
          </PopoverPopup>,
          document.body,
        )}
    </>
  );
}
