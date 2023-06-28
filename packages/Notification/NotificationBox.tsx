import * as React from 'react';
import styles from './index.less';
import { Space } from '..';
import { IconMap, IconType } from '@/Icon/_presets';
import { useEffect, useRef, useState } from 'react';
import { CloseOutline } from '@/Icon';
import classNames from 'classnames';

export interface NotificationBoxProps {
  // 图标类型
  type?: IconType;
  // 标题
  message?: React.ReactNode;
  // 内容
  description?: React.ReactNode;
  // 存活时间（单位:ms）
  duration?: number;
  // 图标
  icon?: React.ReactNode;
  // 是否显示关闭按钮
  closable?: boolean;
  // 自定义关闭按钮
  closeIcon?: React.ReactNode;
  // 样式
  style?: React.CSSProperties;
  // 删除回调
  onRemove?: () => void;
}

const animationDuration: number = 300;
export default function NotificationBox(props: NotificationBoxProps) {
  const {
    closeIcon = <CloseOutline pointer fontSize={14} />,
    closable = true,
    duration = 4500,
    style = {},
  } = props;

  const icon = props?.icon || (props?.type && IconMap?.[props?.type]?.({ fontSize: 18 }));
  const timerId = useRef<any>();
  const disappearTimerId = useRef<any>();
  const [isAppear, setIsAppear] = useState<boolean>(true);

  function clearInitTimer() {
    timerId.current && clearTimeout(timerId.current);
  }

  function handleRemove() {
    setIsAppear(false);
    clearInitTimer();
    disappearTimerId.current = setTimeout(() => {
      props?.onRemove?.();
    }, animationDuration - 50);
  }

  useEffect(() => {
    if (duration) {
      timerId.current = setTimeout(() => handleRemove(), duration);
    }
    return () => {
      clearInitTimer();
      disappearTimerId.current && clearTimeout(disappearTimerId.current);
    };
  }, []);

  return (
    <div
      className={classNames(
        styles['notificationBox'],
        isAppear ? styles['notificationBox-appear'] : styles['notificationBox-disappear'],
      )}
      style={{ width: 300, animationDuration: `${animationDuration}ms`, ...style }}
    >
      <Space style={{ width: '100%' }} size={10}>
        {icon && (
          <div style={{ alignSelf: 'flex-start' }} className={styles['notificationBox-title']}>
            {icon}
          </div>
        )}
        <Space direction={'vertical'} style={{ flex: 1, wordBreak: 'break-all' }}>
          {props?.message && (
            <div className={styles['notificationBox-title']}>{props?.message}</div>
          )}
          {props?.description && <div>{props?.description}</div>}
        </Space>
        {closable && (
          <div style={{ alignSelf: 'flex-start' }} onClick={handleRemove}>
            {closeIcon}
          </div>
        )}
      </Space>
    </div>
  );
}
