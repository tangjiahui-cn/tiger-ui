/**
 * Dialog
 *
 * @author tangjiahui
 * @date 2024/1/31
 */
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Space } from '..';
import classNames from 'classnames';
import { useListenEffect, useListenLatestPointerDown } from '@/_hooks';
import { useStyle } from './style';

export interface DialogProps {
  /**
   * @description 对话框最外层样式
   * @default 500px
   */
  style?: React.CSSProperties;
  /**
   * @description 对话框content样式
   * @default 500px
   */
  bodyStyle?: React.CSSProperties;
  /**
   * @description 对话框默认
   * @default 500px
   */
  width?: number | string;
  /**
   * @description 是否关闭时销毁
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * @description 控制对话框显隐
   * @default false
   */
  open?: boolean;
  /**
   * @description 对话框标题
   * @default 标题
   */
  title?: React.ReactNode;
  /**
   * @description 对话框尾部
   */
  footer?: null | React.ReactNode;
  /**
   * @description 点击右上角是否可以关闭
   * @default true
   */
  closable?: boolean;
  /**
   * @description 自定义右上角关闭图标
   */
  closeIcon?: React.ReactNode;
  /**
   * @description 确定按钮内容
   */
  okText?: React.ReactNode;
  /**
   * @description 取消按钮内容
   */
  cancelText?: React.ReactNode;
  /**
   * @description 是否显示遮罩层
   * @default true
   */
  mask?: boolean;
  /**
   * @description 点击遮罩层是否可以关闭对话框
   * @default true
   */
  maskClosable?: boolean;
  /**
   * @description 遮罩层样式
   */
  maskStyle?: React.CSSProperties;
  /**
   * @description 手动控制动画时长（单位：ms）
   * @default 400
   */
  animationDelay?: number;
  /**
   * @description 取消回调
   */
  onCancel?: () => void;
  /**
   * @description 确定回调
   */
  onOk?: () => void;
  /**
   * @description 对话框包裹元素
   */
  children?: React.ReactNode;
}

export default function Dialog(props: DialogProps) {
  const {
    animationDelay = 300,
    closable = true,
    maskClosable = true,
    mask = true,
    closeIcon = <CloseOutlined />,
    cancelText = '取消',
    okText = '确定',
  } = props;

  const [animationClass, setAnimationClass] = useState<string>('');
  const [bgAnimationClass, setBgAnimationClass] = useState<string>('');
  const [nextVisible, setNextVisible] = useState<boolean>(false);
  const snapshotRef = useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const style = useStyle('dialog');
  const timerIdRef = useRef<any>();
  const listenerRef = useListenLatestPointerDown();

  function appear(x: number = 0, y: number = 0) {
    setAnimationClass(style.contentAppear(x, y, animationDelay));
    setBgAnimationClass(style.backgroundAppear(animationDelay));
  }

  function disAppear(x = 0, y = 0) {
    setAnimationClass(style.contentDisAppear(x, y, animationDelay));
    setBgAnimationClass(style.backgroundDisAppear(animationDelay));
  }

  useListenEffect(
    (isFirst: boolean) => {
      if (props?.open) {
        if (timerIdRef.current) {
          clearTimeout(timerIdRef.current);
          timerIdRef.current = undefined;
        }

        // Record 'rectInfo' while open the dialog.
        const rectInfo = listenerRef.current?.getLatestRectInfo?.();
        snapshotRef.current = {
          x: (rectInfo?.x || 0) + (rectInfo?.width || 0) / 2,
          y: (rectInfo?.y || 0) + (rectInfo?.height || 0) / 2,
        };

        // Dialog content appear to screen.
        appear(snapshotRef.current.x || 0, snapshotRef.current.y || 0);
        setNextVisible(true);
      } else {
        // If set 'open' false outside at first time, don't show animation.
        if (isFirst) {
          setNextVisible(false);
          return;
        }

        // Dialog content start to hide.
        disAppear(snapshotRef.current.x || 0, snapshotRef.current.y || 0);

        // after BG_DELAY, hide the full dialog.
        timerIdRef.current = setTimeout(() => {
          timerIdRef.current = undefined;
          setNextVisible(false);
        }, animationDelay);
      }
    },
    [props?.open],
  );

  return (
    (props?.destroyOnClose ? nextVisible : true) &&
    ReactDOM.createPortal(
      <div
        className={style.dialog()}
        style={{
          display: props?.destroyOnClose || nextVisible ? 'flex' : 'none',
          ...props?.style,
        }}
      >
        {/* background */}
        <div
          style={props?.maskStyle}
          className={classNames(mask && bgAnimationClass, style.dialogMask())}
          onClick={maskClosable ? props?.onCancel : undefined}
        />
        {/* content */}
        <div
          className={classNames(animationClass, style.dialogContent())}
          style={{
            width: props?.width || 500,
            ...props?.bodyStyle,
          }}
        >
          {/* head */}
          {props?.title && (
            <div className={style.dialogContentHeader()}>
              <div style={{ flex: 1 }}>{props?.title}</div>
            </div>
          )}
          <div className={style.closeIcon()} onClick={closable ? props?.onCancel : undefined}>
            {closeIcon}
          </div>
          {/* body */}
          <div className={style.dialogContentBody()}>{props?.children}</div>
          {/* footer */}
          {props?.footer || (
            <div className={style.dialogContentFooter()}>
              <Space style={{ float: 'right' }}>
                {<Button onClick={props?.onCancel}>{cancelText}</Button>}
                {
                  <Button type={'primary'} onClick={props?.onOk}>
                    {okText}
                  </Button>
                }
              </Space>
            </div>
          )}
        </div>
      </div>,
      document.body,
    )
  );
}
