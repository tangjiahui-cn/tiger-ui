import React, { useMemo } from 'react';
import styles from './index.less';
import { MessageOptions } from '@/Message/message';

type MessageBoxProps = Pick<MessageOptions, 'message' | 'type' | 'icon'>;

export default function (props: MessageBoxProps) {
  const icon = useMemo(() => {
    switch (props.type) {
      case 'success':
        return <>(success)</>;
      case 'error':
        return <>(error)</>;
      case 'loading':
        return <>(loading)</>;
      case 'warn':
        return <>(warn)</>;
      case 'warning':
        return <>(warning)</>;
      case 'info':
        return <>(info)</>;
    }
    return <></>;
  }, [props.type]);

  return (
    <div className={styles['message-box']}>
      <div className={styles['message-box-body']}>
        {props.icon || icon}
        {props?.message}
      </div>
    </div>
  );
}
