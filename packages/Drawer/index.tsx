import * as React from 'react';
import ReactDom from 'react-dom';
import styles from './index.less';
import { useEffect, useMemo, useState } from 'react';
import { Button, Space } from '@/index';

type directionType = 'top' | 'left' | 'right' | 'bottom';

export interface DrawerProps {
  // 抽屉是否显示
  visible?: boolean;
  // 关闭时销毁子元素
  destroyOnClose?: boolean;
  // 标题
  title?: React.ReactNode;
  // 出现方向
  direction: directionType;
  // 是否显示右上角关闭图标
  closable?: boolean;
  // 自定义右上角关闭图标
  closeIcon?: React.ReactNode;
  // 是否显示遮罩层
  mask?: boolean;
  // 点击遮罩层是否可以关闭
  maskClosable?: boolean;
  // 遮罩层样式
  maskStyle?: React.CSSProperties;
  // 抽屉内部样式
  bodyStyle?: React.CSSProperties;
  // 抽屉头部
  header?: null | React.ReactNode;
  // 抽屉底部
  footer?: null | React.ReactNode;
  // 取消按钮文字
  cancelText?: React.ReactNode;
  // 确定按钮文字
  okText?: React.ReactNode;
  // 对话框宽度
  width?: number | string;
  // 点击确定按钮回调事件
  onOk?: () => void;
  // 点击取消按钮回调事件
  onCancel?: () => void;
  // 子元素
  children?: any;
}

Drawer.defaultProps = {
  direction: 'right',
  width: 350,
  destroyOnClose: false,
  title: '标题',
  mask: true,
  maskClosable: true,
  okText: <Button type={'primary'}>确定</Button>,
  cancelText: <Button>取消</Button>,
  closable: true,
  closeIcon: <span>close</span>, // TODO: replace close icon
};

const animationDuration: number = 500;
const contentAnimationDuration: number = 500;
const disappearAnimationDuration: number = 300;

export default function Drawer(props: DrawerProps) {
  const [isAppear, setIsAppear] = useState<boolean>(false);
  const [width, height, bodyClasses] = useMemo(() => {
    const bodyClasses = [
      styles['drawer-content'],
      styles[`drawer-content-${props.direction}`],
      styles[`drawer-content-${props.direction}-${isAppear ? 'appear' : 'disappear'}`],
    ].join(' ');

    return ['top', 'bottom'].includes(props.direction)
      ? ['100%', props.width, bodyClasses]
      : [props.width, '100%', bodyClasses];
  }, [props.direction, isAppear]);

  function handleCancel() {
    if (!isAppear) return;
    setIsAppear(false);
    setTimeout(() => {
      props?.onCancel?.();
    }, disappearAnimationDuration);
  }

  const mask = props?.mask && (
    <div
      className={`${styles['drawer-mask']} ${
        styles[isAppear ? 'drawer-mask-appear' : 'drawer-mask-disappear']
      }`}
      style={{ ...(props?.maskStyle || {}), animationDuration: `${animationDuration}ms` }}
      onClick={() => props?.maskClosable && handleCancel()}
    />
  );

  const header =
    props?.header === undefined ? (
      <div className={styles['drawer-content-head']}>
        <div className={styles['drawer-content-head-title']}>{props?.title}</div>
        {props?.closable && (
          <div className={styles['drawer-content-head-close']} onClick={() => handleCancel()}>
            {props?.closeIcon}
          </div>
        )}
      </div>
    ) : (
      props?.header
    );

  const footer =
    props?.footer === undefined ? (
      <div className={styles['drawer-content-footer']}>
        <Space style={{ float: 'right' }}>
          {props?.cancelText && <div onClick={() => handleCancel()}>{props?.cancelText}</div>}
          {props?.okText && <div onClick={() => props?.onOk?.()}>{props?.okText}</div>}
        </Space>
      </div>
    ) : (
      props?.footer
    );

  useEffect(() => {
    if (props?.visible) {
      setIsAppear(true);
    }
  }, [props.visible]);

  return !props.destroyOnClose || props?.visible ? (
    ReactDom.createPortal(
      <div className={styles['drawer']} style={{ display: props?.visible ? undefined : 'none' }}>
        {mask}
        <div
          style={{
            width,
            height,
            animationDuration: `${contentAnimationDuration}ms`,
            ...(props?.bodyStyle || {}),
          }}
          className={bodyClasses}
        >
          {header}
          <div className={styles['drawer-content-body']} style={props?.bodyStyle}>
            {props?.children}
          </div>
          {footer}
        </div>
      </div>,
      document.body,
    )
  ) : (
    <></>
  );
}