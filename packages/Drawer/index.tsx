import * as React from 'react';
import ReactDom from 'react-dom';
import { useEffect, useMemo, useState } from 'react';
import { Button, Space } from '..';
import { useGetLocaleValues } from '../ConfigProvider';
import classNames from 'classnames';
import { CloseOutline } from '../Icon';
import { useStyle } from './style';

export type DirectionType = 'top' | 'left' | 'right' | 'bottom';

export interface DrawerProps {
  /**
   * @description 是否显示弹窗
   */
  visible?: boolean;
  /**
   * @description 关闭时销毁子元素
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * @description 标题
   */
  title?: React.ReactNode;
  /**
   * @description 弹窗出现方向
   * @default right
   */
  direction?: DirectionType;
  /**
   * @description 是否显示右上角关闭图标
   * @default true
   */
  closable?: boolean;
  /**
   * @description 自定义右上角关闭图标
   */
  closeIcon?: React.ReactNode;
  /**
   * @description 是否显示遮罩层
   * @default true
   */
  mask?: boolean;
  /**
   * @description 点击遮罩层是否可以关闭
   * @default true
   */
  maskClosable?: boolean;
  /**
   * @description 遮罩层样式
   */
  maskStyle?: React.CSSProperties;
  /**
   * @description 抽屉内部样式
   */
  bodyStyle?: React.CSSProperties;
  /**
   * @description 抽屉头部
   */
  header?: null | React.ReactNode;
  /**
   * @description 抽屉底部
   */
  footer?: null | React.ReactNode;
  /**
   * @description 取消按钮文字
   */
  cancelText?: React.ReactNode;
  /**
   * @description 自定义确定按钮
   */
  okText?: React.ReactNode;
  /**
   * @description 对话框宽度
   * @default 350
   */
  width?: number | string;
  /**
   * @description 点击确定按钮回调事件
   */
  onOk?: () => void;
  /**
   * @description 点击取消按钮回调事件
   */
  onCancel?: () => void;
  /**
   * @description 子元素
   */
  children?: React.ReactNode;
}

Drawer.defaultProps = {
  direction: 'right',
  width: 350,
  destroyOnClose: false,
  mask: true,
  maskClosable: true,
  closable: true,
};

const animationDuration: number = 500;
const contentAnimationDuration: number = 500;
const disappearAnimationDuration: number = 300;

export default function Drawer(props: DrawerProps) {
  const locales = useGetLocaleValues();
  const style = useStyle('drawer');

  const {
    title = locales.titleValue,
    okText = <Button type={'primary'}>{locales.confirmValue}</Button>,
    cancelText = <Button>{locales.cancelValue}</Button>,
    closeIcon = <CloseOutline pointer />,
  } = props;

  const [isAppear, setIsAppear] = useState<boolean>(false);
  const [width, height, bodyClasses] = useMemo(() => {
    const bodyClasses = classNames(
      style.drawerContent(),
      style.drawerContentDirection(props?.direction || 'right'),
      style.drawerContentDirectionAppear(props?.direction || 'right', isAppear),
    );

    return ['top', 'bottom'].includes(props?.direction || '')
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
      className={classNames(style.drawerMask(), style.drawerMaskAppear(isAppear))}
      style={{ ...(props?.maskStyle || {}), animationDuration: `${animationDuration}ms` }}
      onClick={() => props?.maskClosable && handleCancel()}
    />
  );

  const header =
    props?.header === undefined ? (
      <div className={style.drawerContentHead()}>
        <div className={style.drawerContentHeadTitle()}>{title}</div>
        {props?.closable && (
          <div className={style.drawerContentHeadClose()} onClick={() => handleCancel()}>
            {closeIcon}
          </div>
        )}
      </div>
    ) : (
      props?.header
    );

  const footer =
    props?.footer === undefined ? (
      <div className={style.drawerContentFooter()}>
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

  return !props.destroyOnClose || props?.visible ? (
    ReactDom.createPortal(
      <div className={style.drawer()} style={{ display: props?.visible ? undefined : 'none' }}>
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
          <div className={style.drawerContentBody()} style={props?.bodyStyle}>
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
