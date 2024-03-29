/**
 * Drawer
 *
 * @author tangjiahui
 * @date 2024/02/01
 */
import { DialogProps } from '@/Dialog';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { useFreezeHTMLBody, useListenEffect, useListenLatestPointerDown } from '@/_hooks';
import { Button, Space } from '@/index';
import {
  backgroundAppear,
  backgroundDisAppear,
  drawerContentDisAppear,
  drawerContentAppear,
  Direction,
} from './animationClass';
import { useStyle } from './style';

export type DrawerDirection = Direction;
export type DrawerProps = {
  /**
   * @description 抽屉最外层样式
   * @default 500px
   */
  style?: React.CSSProperties;
  /**
   * @description 抽屉content样式
   * @default 500px
   */
  bodyStyle?: React.CSSProperties;
  /**
   * @description 抽屉默认
   * @default 500px
   */
  width?: number | string;
  /**
   * @description 是否关闭时销毁
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * @description 控制抽屉显隐
   * @default false
   */
  open?: boolean;
  /**
   * @description 抽屉标题
   * @default 标题
   */
  title?: React.ReactNode;
  /**
   * @description 抽屉尾部
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
   * @description 点击遮罩层是否可以关闭抽屉
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
   * @description 抽屉打开方向
   * @default right
   */
  direction?: DrawerDirection;
  /**
   * @description 抽屉包裹元素
   */
  children?: React.ReactNode;
};
export default function Drawer(props: DrawerProps) {
  const {
    animationDelay = 300,
    closable = true,
    maskClosable = true,
    mask = true,
    closeIcon = <CloseOutlined />,
    cancelText = '取消',
    okText = '确定',
    direction = 'right',
  } = props;
  const style = useStyle('drawer');

  const [animationClass, setAnimationClass] = useState<string>('');
  const [bgAnimationClass, setBgAnimationClass] = useState<string>('');
  const [nextVisible, setNextVisible] = useState<boolean>(false);
  const snapshotRef = useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const timerIdRef = useRef<any>();
  const listenerRef = useListenLatestPointerDown();

  function appear() {
    setAnimationClass(drawerContentAppear(direction, animationDelay));
    setBgAnimationClass(backgroundAppear(animationDelay));
  }

  function disAppear() {
    setAnimationClass(drawerContentDisAppear(direction, animationDelay));
    setBgAnimationClass(backgroundDisAppear(animationDelay));
  }

  useFreezeHTMLBody(nextVisible);

  useListenEffect(
    (isFirst: boolean) => {
      if (props?.open) {
        if (timerIdRef.current) {
          clearTimeout(timerIdRef.current);
          timerIdRef.current = undefined;
        }

        // Record 'rectInfo' while open the drawer.
        const rectInfo = listenerRef.current?.getLatestRectInfo?.();
        snapshotRef.current = {
          x: (rectInfo?.x || 0) + (rectInfo?.width || 0) / 2,
          y: (rectInfo?.y || 0) + (rectInfo?.height || 0) / 2,
        };

        // Drawer content appear to screen.
        appear();
        setNextVisible(true);
      } else {
        // If set 'open' false outside at first time, don't show animation.
        if (isFirst) {
          setNextVisible(false);
          return;
        }

        // Drawer content start to hide.
        disAppear();

        // after BG_DELAY, hide the full drawer.
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
        className={style.drawer()}
        style={{
          display: props?.destroyOnClose || nextVisible ? 'block' : 'none',
          ...props?.style,
        }}
      >
        {/* background */}
        <div
          style={props?.maskStyle}
          className={classNames(mask && bgAnimationClass, style.drawerMask())}
          onClick={maskClosable ? props?.onCancel : undefined}
        />
        {/* content */}
        <div className={classNames(animationClass, style.drawerContent())} style={props?.bodyStyle}>
          {/* head */}
          {(props?.title || closable) && (
            <div className={style.drawerContentHeader()}>
              {closable && (
                <div className={style.closeIcon()} onClick={props?.onCancel}>
                  {closeIcon}
                </div>
              )}
              {props?.title}
            </div>
          )}
          {/* body */}
          <div className={style.drawerContentBody()}>{props?.children}</div>
          {/* footer */}
          {props?.footer || (
            <div className={style.drawerContentFooter()}>
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
