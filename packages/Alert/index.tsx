import React, { useState } from 'react';
import styles from './index.less';
import classNames from 'classnames';
import { Space } from '@/index';

type AlertType = 'success' | 'error' | 'warn' | 'info';

export interface AlertProps {
  // 类型
  type?: AlertType;
  // 提示内容
  message?: string | React.ReactNode;
  // 提示描述
  description?: string | React.ReactNode;
  // 自定义图标
  icon?: React.ReactNode;
  // 是否可以关闭
  closable?: boolean;
  // 是否显示图标
  showIcon?: boolean;
  // 容器样式
  style?: React.CSSProperties;
  // 提示内容样式
  messageStyle?: React.CSSProperties;
  // 提示描述样式
  descriptionStyle?: React.CSSProperties;
  // 关闭回调
  onClose?: () => void;
}

type IconMapType = {
  [k in AlertType]: React.ReactNode;
};

// TODO：待替换图标
const ICON_MAP: IconMapType = {
  success: <span>success</span>,
  warn: <span>warn</span>,
  info: <span>info</span>,
  error: <span>error</span>,
};

/**
 * 警告提示
 *
 * At 2023/06/01
 * By TangJiaHui
 */
export default function Alert(props: AlertProps) {
  const { type = 'info', message, description } = props;
  const [visible, setVisible] = useState<boolean>(true);

  function handleClose() {
    setVisible(false);
    props?.onClose?.();
  }

  return (
    <div
      className={classNames(
        styles['alert'],
        styles[`alert-${type}`],
        !visible && styles['alert-hidden'],
      )}
      style={props?.style}
    >
      {props?.showIcon && (
        <div className={styles['alert-icon']}>{props?.icon || ICON_MAP[type]}</div>
      )}
      <Space direction={'vertical'} style={{ flex: 1, overflow: 'hidden' }}>
        {message && (
          <div className={styles['alert-message']} style={props?.messageStyle}>
            {message}
          </div>
        )}
        {description && (
          <div className={styles['alert-description']} style={props?.descriptionStyle}>
            {description}
          </div>
        )}
      </Space>
      {props?.closable && (
        <div
          style={{ alignItems: message ? undefined : 'center' }}
          className={styles['alert-close']}
          onClick={() => handleClose()}
        >
          X
        </div>
      )}
    </div>
  );
}
