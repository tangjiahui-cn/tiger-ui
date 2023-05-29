import * as React from 'react';
import styles from './index.less';
import { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { Button, Space } from '@/index';
import { useGetLocaleValues } from '@/ConfigProvider';
import classNames from 'classnames';

export interface DialogProps {
  // 对话框是否可见
  visible?: boolean;
  // 对话框标题
  title?: React.ReactNode;
  // 自定义头部
  header?: null | React.ReactNode;
  // 自定义底部
  footer?: null | React.ReactNode;
  // 关闭时销毁子元素
  destroyOnClose?: boolean;
  // 对话框宽度
  width?: number | string;
  // 对话框内部样式
  bodyStyle?: React.CSSProperties;
  // 是否显示遮罩层
  mask?: boolean;
  // 点击遮罩层是否可以关闭对话框
  maskClosable?: boolean;
  // 遮罩层样式
  maskStyle?: React.CSSProperties;
  // 是否可点击右上角关闭
  closable?: boolean;
  // 自定义右上角图标
  closeIcon?: React.ReactNode;
  // 确定按钮内容
  okText?: React.ReactNode;
  // 取消按钮内容
  cancelText?: React.ReactNode;
  // 确认按钮回调
  onOk?: () => void;
  // 关闭对话框回调
  onCancel?: () => void;
  // 子元素
  children?: React.ReactNode;
}

Dialog.defaultProps = {
  width: 500,
  destroyOnClose: false,
  mask: true,
  maskClosable: true,
  closable: true,
  closeIcon: <span>close</span>, // TODO: replace close icon
};

const animationDuration: number = 150;
const disappearAnimationDuration: number = 80;
export default function Dialog(props: DialogProps) {
  const locales = useGetLocaleValues();
  const {
    title = locales.titleValue,
    okText = <Button type={'primary'}>{locales.confirmValue}</Button>,
    cancelText = <Button>{locales.cancelValue}</Button>,
  } = props;

  const [isAppear, setIsAppear] = useState<boolean>(false);

  function handleCancel() {
    if (!isAppear) return;
    setIsAppear(false);
    setTimeout(() => {
      props?.onCancel?.();
    }, disappearAnimationDuration);
  }

  const mask = props?.mask && (
    <div
      className={classNames(
        styles['dialog-mask'],
        styles[isAppear ? 'dialog-appear' : 'dialog-disappear'],
      )}
      style={{ ...(props?.maskStyle || {}), animationDuration: `${animationDuration}ms` }}
      onClick={() => props?.maskClosable && handleCancel()}
    />
  );

  const header =
    props?.header === undefined ? (
      <div className={styles['dialog-content-head']}>
        <div className={styles['dialog-content-head-title']}>{title}</div>
        {props?.closable && (
          <div className={styles['dialog-content-head-close']} onClick={() => handleCancel()}>
            {props?.closeIcon}
          </div>
        )}
      </div>
    ) : (
      props?.header
    );

  const footer =
    props?.footer === undefined ? (
      <div className={styles['dialog-content-footer']}>
        <Space style={{ float: 'right' }}>
          {cancelText && <div onClick={() => handleCancel()}>{cancelText}</div>}
          {okText && <div onClick={() => props?.onOk?.()}>{okText}</div>}
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

  // TODO: 初次打开有几率闪烁，后续考虑先显示背景色（appear动画），动画完成后使用mask背景色替代背景色。
  return !props.destroyOnClose || props?.visible ? (
    ReactDom.createPortal(
      <div className={styles['dialog']} style={{ display: props?.visible ? undefined : 'none' }}>
        {mask}
        <div
          className={classNames(
            styles['dialog-content'],
            styles[isAppear ? 'dialog-appear' : 'dialog-disappear'],
          )}
          style={{
            width: props?.width,
            animationDuration: `${animationDuration}ms`,
            ...(props?.bodyStyle || {}),
          }}
        >
          {header}
          <div className={styles['dialog-content-body']} style={props?.bodyStyle}>
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
