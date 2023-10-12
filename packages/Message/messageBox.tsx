import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.less';
import { MessageOptions } from '../Message/message';
import classNames from 'classnames';
import { IconPresets } from '../Icon';
import { useStyle } from './style/messageBox';

type MessageBoxProps = Pick<
  MessageOptions,
  'content' | 'type' | 'icon' | 'duration' | 'animationDuration'
>;

export default function (props: MessageBoxProps) {
  const { animationDuration = 0 } = props;
  const style = useStyle('message-box');
  const [isAppear, setIsAppear] = useState<boolean>(false);

  const icon = useMemo(() => {
    switch (props.type) {
      case 'success':
        return <IconPresets.SuccessFillIcon />;
      case 'error':
        return <IconPresets.ErrorFillIcon />;
      case 'loading':
        return <IconPresets.LoadingOutlineIcon />;
      case 'warn':
        return <IconPresets.WarnFillIcon />;
      case 'warning':
        return <IconPresets.WarningFillIcon />;
      case 'info':
        return <IconPresets.InfoFillIcon />;
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
      className={classNames(style.messageBox(), style.appear(isAppear))}
      style={{
        zIndex: 999,
        animationDuration: `${animationDuration}ms`,
      }}
    >
      <div className={style.body()}>
        {props.icon || icon}
        {props?.content}
      </div>
    </div>
  );
}
