/**
 * Alert
 *
 * At 2023/06/01
 * By TangJiaHui
 */
import React, { DOMAttributes, ForwardedRef, useState } from 'react';
import { useGlobal } from '@/_hooks';
import { omit } from '@/_utils/object';
import classNames from 'classnames';
import { IconMap } from '@/Icon/_presets';
import { Space } from '@/index';
import { CloseOutlined } from '@ant-design/icons';
import './alert.less';

export type AlertType = 'info' | 'success' | 'error' | 'warn';
export interface BaseAlertProps {
  /**
   * @description 类型
   * @default info
   */
  type?: AlertType;
  /**
   * @description 主要提示内容
   */
  message?: string | React.ReactNode;
  /**
   * @description 主要提示内容样式
   */
  messageStyle?: React.CSSProperties;
  /**
   * @description 描述内容
   */
  description?: string | React.ReactNode;
  /**
   * @description 描述内容样式
   */
  descriptionStyle?: React.CSSProperties;
  /**
   * @description 自定义图标
   */
  icon?: React.ReactNode;
  /**
   * @description 右上角是否显示关闭图标
   * @default false
   */
  closable?: boolean;
  /**
   * @description 是否显示图标
   * @default false
   */
  showIcon?: boolean;
  /**
   * @description 关闭元素时回调事件
   */
  onClose?: () => void;
  /**
   * @description style
   */
  style?: React.CSSProperties;
  /**
   * @description className
   */
  className?: string;
}

export type BaseAlertPropsKeys = keyof BaseAlertProps;
export type AlertProps = BaseAlertProps & DOMAttributes<HTMLButtonElement>;

const privateKeys: BaseAlertPropsKeys[] = [
  'type',
  'message',
  'messageStyle',
  'description',
  'descriptionStyle',
  'icon',
  'closable',
  'showIcon',
  'onClose',
  'style',
  'className',
];

const Alert: React.ForwardRefExoticComponent<AlertProps> = React.forwardRef(function (
  props: AlertProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { prefix } = useGlobal('alert');
  const originProps: DOMAttributes<HTMLDivElement> = omit(props, privateKeys);
  const type = props?.type || 'info';

  const [visible, setVisible] = useState<boolean>(true);

  const classes = classNames(
    props?.className,
    prefix,
    `${prefix}-${type}`,
    !visible && `${prefix}-hidden`,
  );

  function handleClose() {
    setVisible(false);
    props?.onClose?.();
  }

  return (
    <div {...originProps} ref={ref} className={classes} style={props?.style}>
      {props?.showIcon && (
        <div className={`${prefix}-icon`}>{props?.icon || IconMap[type]?.()}</div>
      )}
      <Space direction={'vertical'} style={{ flex: 1, overflow: 'hidden' }}>
        {props?.message && (
          <div className={`${prefix}-message`} style={props?.messageStyle}>
            {props?.message}
          </div>
        )}
        {props?.description && (
          <div className={`${prefix}-description`} style={props?.descriptionStyle}>
            {props?.description}
          </div>
        )}
      </Space>
      {props?.closable && (
        <div
          style={{ alignItems: props?.message ? undefined : 'center' }}
          className={`${prefix}-close`}
          onClick={() => handleClose()}
        >
          <CloseOutlined />
        </div>
      )}
    </div>
  );
});

export default Alert;
