/**
 * Alert
 *
 * @author tangjiahui
 * @date 2023/6/23
 * @modified 2024/5/27
 */
import type { ResultType } from '@/_types';
import React, { ForwardedRef, forwardRef, useCallback, useMemo, useState } from 'react';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import classNames from 'classnames';
import Icon, {
  CloseOutlined,
  InfoCircleFilled,
  CheckCircleFilled,
  CloseCircleFilled,
} from '@ant-design/icons';
import { isNullable } from '@/_utils';
import type { LoopScrollProps } from './loopScroll';
import LoopScroll from './loopScroll';
import './alert.less';

export type AlertLoopOptions = LoopScrollProps;
export interface AlertProps {
  /**
   * type of Alert
   * @default 'info'
   * */
  type?: ResultType;
  /** title of the alert */
  message?: React.ReactNode;
  /** subTitle of the alert */
  description?: React.ReactNode;
  /** enable text loop scroll */
  loop?: boolean | AlertLoopOptions;
  /**
   * show border or not
   * @default true
   * */
  bordered?: boolean;
  /** can it be closed */
  closable?: boolean;
  /** close icon */
  icon?: React.ReactNode;
  /** close icon's className, if you use icon, this will not take effect. */
  iconClassName?: string;
  /** close icon's style, if you use icon, this will not take effect. */
  iconStyle?: React.CSSProperties;
  /** show icon or not */
  showIcon?: boolean;
  /** alert style */
  style?: React.CSSProperties;
  /** alert className */
  className?: string;
  /** close event callback, which must enable the closable props */
  onClose?: () => void;
}

const AlertIconMap = {
  info: InfoCircleFilled,
  success: CheckCircleFilled,
  warning: InfoCircleFilled,
  error: CloseCircleFilled,
};

const AlertIconNode: React.FC<Pick<AlertProps, 'showIcon' | 'type' | 'className' | 'icon'>> = (
  props,
) => {
  if (!props?.showIcon) return null;
  if (props?.icon) return props.icon;
  const Icon = AlertIconMap[props?.type || 'info'];
  return Icon ? <Icon className={props?.className} /> : null;
};

const AlertCloseNode: React.FC<
  Pick<AlertProps, 'closable' | 'className'> & {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }
> = (props) => {
  return props?.closable ? (
    <CloseOutlined className={props?.className} onClick={props?.onClick} />
  ) : null;
};

const Alert = forwardRef((props: AlertProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    type = 'info',
    message,
    loop,
    bordered = true,
    closable,
    icon,
    iconClassName,
    iconStyle,
    showIcon,
    style,
    className,
    description,
    onClose,
    ...rest
  } = props;
  const [visible, setVisible] = useState(true);
  const prefix = usePrefix('alert');

  const classes: string = classNames(
    props?.className,
    prefix,
    bordered && `${prefix}-bordered`,
    `${prefix}-${type}`,
    description && `${prefix}-flex-start`,
  );

  const handleClose = useCallback(() => {
    setVisible(false);
    onClose?.();
  }, []);

  const messageNode: React.ReactNode = useMemo(() => {
    if (isNullable(message)) return null;
    let body: React.ReactNode = message;
    if (loop) {
      const loopScrollProps = typeof loop === 'object' ? loop : {};
      body = <LoopScroll {...loopScrollProps}>{message}</LoopScroll>;
    }
    return <div className={`${prefix}-message`}>{body}</div>;
  }, [message]);

  const descriptionNode: React.ReactNode = useMemo(
    () =>
      isNullable(description) ? null : <div className={`${prefix}-description`}>{description}</div>,
    [description],
  );

  return visible ? (
    <div {...rest} className={classes} ref={ref} style={props?.style}>
      <AlertIconNode
        icon={icon}
        type={type}
        showIcon={showIcon}
        className={`${prefix}-${type}-icon`}
      />
      <div className={`${prefix}-body`}>
        {messageNode}
        {descriptionNode}
      </div>
      <AlertCloseNode closable={closable} className={`${prefix}-close`} onClick={handleClose} />
    </div>
  ) : null;
});

export default Alert;
