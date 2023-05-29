import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.less';
import { MessageOptions } from '@/Message/message';
import classNames from 'classnames';

type MessageBoxProps = Pick<
  MessageOptions,
  'content' | 'type' | 'icon' | 'duration' | 'animationDuration'
>;

export default function (props: MessageBoxProps) {
  const { animationDuration = 0 } = props;
  const [isAppear, setIsAppear] = useState<boolean>(false);

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
    setIsAppear(true);
    setTimeout(() => {
      setIsAppear(false);
    }, props?.duration);
  }, []);

  return (
    <div
      className={classNames(
        styles['message-box'],
        styles[isAppear ? 'message-box-appear' : 'message-box-disappear'],
      )}
      style={{
        animationDuration: `${animationDuration}ms`,
      }}
    >
      <div className={styles['message-box-body']}>
        {props.icon || icon}
        {props?.content}
      </div>
    </div>
  );
}
