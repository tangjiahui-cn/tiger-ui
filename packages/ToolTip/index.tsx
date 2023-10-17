import * as React from 'react';
import { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import ToolTipPopup from './ToolTipPopup';

export interface ToolTipProps {
  // 浮层内容
  title?: React.ReactNode;
  // 浮层样式
  overlayStyle?: React.CSSProperties;
  // 占位子元素
  children?: React.ReactElement;
}

export default function ToolTip(props: ToolTipProps) {
  const ref = useRef();
  const [visible, setVisible] = useState<boolean>(false);

  function handleOpen() {
    setVisible(true);
  }

  function handleClose() {
    setVisible(false);
  }

  return (
    <>
      {props?.children &&
        React.cloneElement(props?.children, {
          ref,
          onMouseEnter() {
            handleOpen();
          },
          onMouseLeave() {
            handleClose();
          },
        })}
      {visible &&
        ReactDOM.createPortal(
          <ToolTipPopup baseRef={ref} visible={visible} style={props?.overlayStyle}>
            {props?.title}
          </ToolTipPopup>,
          document.body,
        )}
    </>
  );
}
