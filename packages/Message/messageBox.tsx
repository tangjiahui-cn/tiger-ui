import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.less';
import { MessageOptions } from '@/Message/message';

type MessageBoxProps = Pick<
  MessageOptions,
  'content' | 'type' | 'icon' | 'duration' | 'animationTime'
>;

export default function (props: MessageBoxProps) {
  const { animationTime = 0 } = props;
  const [isDisAppear, setIsDisAppear] = useState<boolean>(false);

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

  useEffect(() => {
    setTimeout(() => {
      setIsDisAppear(true);
    }, props?.duration);
  }, []);

  return (
    <div
      className={`${styles['message-box']}`}
      style={{
        animation: `${isDisAppear ? 'disappear' : 'appear'} ${animationTime}ms`,
      }}
    >
      <div className={styles['message-box-body']}>
        {props.icon || icon}
        {props?.content}
      </div>
    </div>
  );
}
