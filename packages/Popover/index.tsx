import * as React from 'react';
import { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import PopoverPopup from '@/Popover/PopoverPopup';
import styles from './index.less';
import { Space } from '@/index';

export interface PopoverProps {
  // 标题
  title?: React.ReactNode;
  // 内容
  content?: React.ReactNode;
  // 默认展开
  defaultVisible?: boolean;
  // 浮层样式
  overlayStyle?: React.CSSProperties;
  // 占位子元素
  children?: React.ReactElement;
}

export default function Popover(props: PopoverProps) {
  const [visible, setVisible] = useState<boolean>(!!props?.defaultVisible);
  const ref = useRef();

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
              {props?.title && <div className={styles['popover-title']}>{props?.title}</div>}
              {props?.content && <div className={styles['popover-content']}>{props?.content}</div>}
            </Space>
          </PopoverPopup>,
          document.body,
        )}
    </>
  );
}
