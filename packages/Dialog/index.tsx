import * as React from 'react';
import { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { Button, Space } from '..';
import { useGetLocaleValues } from '../ConfigProvider';
import classNames from 'classnames';
import { CloseOutline } from '../Icon';
import { useStyle } from '@/Dialog/style';

export interface DialogProps {
  /**
   * @description 对话框显示
   * @default undefined
   */
  visible?: boolean;
  /**
   * @description 对话框标题
   * @default 标题
   */
  title?: React.ReactNode;
  /**
   * @description 对话框头部
   */
  header?: null | React.ReactNode;
  /**
   * @description 对话框尾部
   */
  footer?: null | React.ReactNode;
  /**
   * @description 关闭时销毁子元素
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * @description 对话框宽度
   * @default 500
   */
  width?: number | string;
  /**
   * @description 对话框内部样式
   */
  bodyStyle?: React.CSSProperties;
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
   * @description 确认按钮回调
   */
  onOk?: () => void;
  /**
   * @description 关闭对话框回调
   */
  onCancel?: () => void;
  /**
   * @description 对话框内部元素
   */
  children?: React.ReactNode;
}

Dialog.defaultProps = {
  width: 500,
  destroyOnClose: false,
  mask: true,
  maskClosable: true,
  closable: true,
};

const animationDuration: number = 150;
const disappearAnimationDuration: number = 80;
export default function Dialog(props: DialogProps) {
  const locales = useGetLocaleValues();
  const style = useStyle('dialog');
  const {
    title = locales.titleValue,
    okText = <Button type={'primary'}>{locales.confirmValue}</Button>,
    cancelText = <Button>{locales.cancelValue}</Button>,
    closeIcon = <CloseOutline pointer />,
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
      className={classNames(style.mask(), style.appear(isAppear))}
      style={{ ...(props?.maskStyle || {}), animationDuration: `${animationDuration}ms` }}
      onClick={() => props?.maskClosable && handleCancel()}
    />
  );

  const header =
    props?.header === undefined ? (
      <div className={style.contentHead()}>
        <div className={style.contentHeadTitle()}>{title}</div>
        {props?.closable && (
          <div className={style.contentHeadClose()} onClick={() => handleCancel()}>
            {closeIcon}
          </div>
        )}
      </div>
    ) : (
      props?.header
    );

  const footer =
    props?.footer === undefined ? (
      <div className={style.contentFooter()}>
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
      <div className={style.dialog()} style={{ display: props?.visible ? undefined : 'none' }}>
        {mask}
        <div
          className={classNames(style.content(), style.appear(isAppear))}
          style={{
            width: props?.width,
            animationDuration: `${animationDuration}ms`,
            ...(props?.bodyStyle || {}),
          }}
        >
          {header}
          <div className={style.contentBody()} style={props?.bodyStyle}>
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
