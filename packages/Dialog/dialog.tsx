/**
 * Dialog
 *
 * @author tangjiahui
 * @date 2024/1/31
 * @modifed at 2024/6/21
 */
import { createPortal } from 'react-dom';
import { usePrefix } from '@/ConfigProvider';
import Mask from './mask';
import React, { DOMAttributes, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useFreezeHTMLBody, useListenLatestPointerDown } from '@/_hooks';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Space } from '@/index';
import './dialog.less';

export interface DialogProps extends DOMAttributes<HTMLDivElement> {
  /** while visible is false, don't save the components status */
  destroyOnClose?: boolean;
  /** body style */
  bodyStyle?: React.CSSProperties;
  /** body width */
  width?: number | string;
  /** dialog visible */
  visible?: boolean;
  /** dialog title */
  title?: React.ReactNode;
  /** dialog header */
  header?: React.ReactNode;
  /** dialog footer */
  footer?: React.ReactNode;
  /** if show close icon */
  closable?: boolean;
  /** custom close icon */
  closeIcon?: React.ReactNode;
  /** dialog animation duration */
  animationDuration?: number;
  /** mask visible */
  mask?: boolean;
  /** if close while click mask */
  maskClosable?: boolean;
  /** mask style */
  maskStyle?: React.CSSProperties;
  /** mask className */
  maskClassName?: string;
  /** dialog children */
  children?: React.ReactNode;
  /** dialog style */
  style?: React.CSSProperties;
  /** dialog className */
  className?: string;
  /** dialog cancelLoading */
  cancelLoading?: boolean;
  /** dialog confirmLoading */
  confirmLoading?: boolean;
  /** dialog cancelText */
  cancelText?: React.ReactNode;
  /** dialog confirmText */
  confirmText?: React.ReactNode;
  /** onCancel callback */
  onCancel?: () => void;
  /** onOk callback */
  onOk?: () => void;
}

const Dialog = (props: DialogProps) => {
  const {
    destroyOnClose,
    bodyStyle,
    width = 400,
    children,
    visible,
    mask = true,
    maskClosable = true,
    maskStyle,
    maskClassName,
    title,
    header,
    footer,
    cancelLoading,
    confirmLoading,
    cancelText = '取消',
    confirmText = '确定',
    closable = true,
    closeIcon = <CloseOutlined />,
    animationDuration = 300,
    style,
    className,
    onOk,
    onCancel,
    ...rest
  } = props;

  const listenerRef = useListenLatestPointerDown();
  const prefix = usePrefix('dialog');

  const [nextVisible, setNextVisible] = useState(visible);

  const [clickPos, setClickPos] = useState<{
    screenX: number | string;
    screenY: number | string;
  }>({
    screenX: 0,
    screenY: 0,
  });

  const footerNode =
    footer === undefined ? (
      <Space style={{ float: 'right' }}>
        <Button loading={cancelLoading} onClick={onCancel}>
          {cancelText}
        </Button>
        <Button loading={confirmLoading} type={'primary'} onClick={onOk}>
          {confirmText}
        </Button>
      </Space>
    ) : null;

  useEffect(() => {
    let timerId: any;
    if (visible) {
      const rectInfo = listenerRef.current.getLatestRectInfo();
      setClickPos({
        screenX: rectInfo ? rectInfo.x + rectInfo.width / 2 : '50%',
        screenY: rectInfo ? rectInfo.y + rectInfo.height / 2 : '50%',
      });
      setNextVisible(true);
    } else {
      timerId = setTimeout(() => {
        setNextVisible(false);
      }, animationDuration);
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [visible]);

  useFreezeHTMLBody(nextVisible);

  return (destroyOnClose ? nextVisible : true)
    ? createPortal(
        <div
          {...rest}
          className={classNames(prefix, className)}
          style={{
            display: nextVisible ? 'block' : 'none',
            ...style,
          }}
        >
          <Mask
            disabledAnimation={!mask}
            visible={mask && visible}
            style={maskStyle}
            className={maskClassName}
            onClick={maskClosable ? onCancel : undefined}
          />
          <div
            className={classNames(`${prefix}-content`, {
              [`${prefix}-content-appear`]: visible,
              [`${prefix}-content-disappear`]: !visible,
            })}
            style={{
              width,
              animationDuration: animationDuration ? `${animationDuration}ms` : undefined,
              top: clickPos.screenY,
              left: clickPos.screenX,
              ...bodyStyle,
            }}
          >
            <div className={`${prefix}-content-header`}>
              {header}
              {!header && (
                <>
                  {title ? <div>{title}</div> : null}
                  {closable ? (
                    <div className={`${prefix}-content-close`} onClick={onCancel}>
                      {closeIcon}
                    </div>
                  ) : null}
                </>
              )}
            </div>
            {children ? <div className={`${prefix}-content-body`}>{children}</div> : null}
            {footerNode ? <div>{footerNode}</div> : null}
          </div>
        </div>,
        document.body,
      )
    : null;
};

export default Dialog;
