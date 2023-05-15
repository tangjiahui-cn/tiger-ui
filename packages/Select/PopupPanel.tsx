import { useEffect, useRef } from 'react';
import * as React from 'react';
import styles from './PopupPanel.less';
import { createPortal } from 'react-dom';

export type GetPopularContainer = (el?: any) => Element;

interface IPopupPanel {
  // 浮层出现触发聚焦
  visible?: boolean;
  // 浮层样式
  style?: React.CSSProperties;
  // 浮层挂载位置
  getPopularContainer?: GetPopularContainer;
  // 聚焦回调事件
  onFocus?: () => void;
  // 失焦回调事件
  onBlur?: () => void;
  // 子元素
  children?: React.ReactNode;
}

export default function PopupPanel(props: IPopupPanel) {
  const { style = {} } = props;
  const mountDom: Element = props?.getPopularContainer?.() || document.body;

  const domRef = useRef<any>();
  const isFocus = useRef<boolean>(false);

  useEffect(() => {
    if (props?.visible && !isFocus.current) {
      isFocus.current = true;
      setTimeout(() => {
        props?.onFocus?.();
        domRef.current?.focus?.();
      });
    } else {
      isFocus.current = false;
      domRef.current?.blur();
    }
  }, [props?.visible]);

  return createPortal(
    <div
      ref={domRef}
      tabIndex={0}
      className={styles.popupPanel}
      style={{
        maxHeight: props?.visible ? 325 : 0,
        ...style,
      }}
      onBlur={() => {
        props?.onBlur?.();
      }}
    >
      {props?.children}
    </div>,
    mountDom,
  );
}
