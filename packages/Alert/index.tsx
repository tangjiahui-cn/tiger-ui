import React, { useState } from 'react';
import classNames from 'classnames';
import { Space } from '..';
import { IconMap } from '../Icon/_presets';
import { AlertType, useStyle } from './style';

export interface AlertProps {
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
   * @description 容器样式
   */
  style?: React.CSSProperties;
  /**
   * @description 关闭元素时回调事件
   */
  onClose?: () => void;
}

/**
 * 警告提示
 *
 * At 2023/06/01
 * By TangJiaHui
 */
export default function Alert(props: AlertProps) {
  const { type = 'info', message, description } = props;
  const [visible, setVisible] = useState<boolean>(true);
  const style = useStyle('alert');

  function handleClose() {
    setVisible(false);
    props?.onClose?.();
  }

  return (
    <div
      className={classNames(style.alert(), style.alertType(type), !visible && style.alertHidden())}
      style={props?.style}
    >
      {props?.showIcon && (
        <div className={style.alertIcon()}>{props?.icon || IconMap[type]?.()}</div>
      )}
      <Space direction={'vertical'} style={{ flex: 1, overflow: 'hidden' }}>
        {message && (
          <div className={style.alertMessage()} style={props?.messageStyle}>
            {message}
          </div>
        )}
        {description && (
          <div className={style.alertDescription()} style={props?.descriptionStyle}>
            {description}
          </div>
        )}
      </Space>
      {props?.closable && (
        <div
          style={{ alignItems: message ? undefined : 'center' }}
          className={style.alertClose()}
          onClick={() => handleClose()}
        >
          X
        </div>
      )}
    </div>
  );
}
