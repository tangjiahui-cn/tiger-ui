/**
 * Alert
 *
 * @author tangjiahui
 * @date 2023/6/23
 * @modified 2024/5/27
 */
import type { ResultType } from '@/_types';
import React, { ForwardedRef, forwardRef, memo, useCallback, useState } from 'react';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import classNames from 'classnames';
import Icon, {
  CloseOutlined,
  InfoCircleFilled,
  CheckCircleFilled,
  CloseCircleFilled,
} from '@ant-design/icons';
import { isNullable, shallowCompare } from '@/_utils';
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
  /** message className */
  messageClassName?: string;
  /** message style */
  messageStyle?: React.CSSProperties;
  /** subTitle of the alert */
  description?: React.ReactNode;
  /** description className */
  descriptionClassName?: string;
  /** description style */
  descriptionStyle?: React.CSSProperties;
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

const AlertIconNode: React.FC<Pick<AlertProps, 'type' | 'className' | 'icon'>> = (props) => {
  if (props?.icon) return props.icon;
  const Icon = AlertIconMap[props?.type || 'info'];
  return Icon ? <Icon className={props?.className} /> : null;
};

const AlertCloseNode: React.FC<
  Pick<AlertProps, 'className'> & {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }
> = (props) => {
  return <CloseOutlined className={props?.className} onClick={props?.onClick} />;
};

const AlertMessageNode: React.FC<
  Pick<AlertProps, 'loop' | 'message' | 'messageStyle' | 'messageClassName'>
> = memo((props) => {
  let body: React.ReactNode = props?.message;
  if (props?.loop) {
    const loopScrollProps = typeof props?.loop === 'object' ? props?.loop : {};
    body = <LoopScroll {...loopScrollProps}>{props?.message}</LoopScroll>;
  }
  return (
    <div style={props?.messageStyle} className={props?.messageClassName}>
      {body}
    </div>
  );
}, memoCompareFunc);

function memoCompareFunc(prevProps: any, nextProps: any) {
  for (const k in prevProps) {
    if (
      (['loop'].includes(k) && !shallowCompare(prevProps[k], nextProps[k])) ||
      prevProps[k] !== nextProps[k]
    ) {
      return false;
    }
  }
  return true;
}

const AlertDescriptionNode: React.FC<
  Pick<AlertProps, 'description' | 'descriptionStyle' | 'descriptionClassName'>
> = (props) => {
  return (
    <div style={props?.descriptionStyle} className={props?.descriptionClassName}>
      {props?.description}
    </div>
  );
};

const Alert = forwardRef((props: AlertProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    type = 'info',
    message,
    messageClassName,
    messageStyle,
    description,
    descriptionClassName,
    descriptionStyle,
    loop,
    bordered = true,
    closable,
    icon,
    iconClassName,
    iconStyle,
    showIcon,
    style,
    className,
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

  return visible ? (
    <div {...rest} className={classes} ref={ref} style={props?.style}>
      {showIcon ? (
        <AlertIconNode icon={icon} type={type} className={`${prefix}-${type}-icon`} />
      ) : null}
      <div className={`${prefix}-body`}>
        {message ? (
          <AlertMessageNode
            loop={loop}
            message={message}
            messageStyle={messageStyle}
            messageClassName={classNames(`${prefix}-message`, messageClassName)}
          />
        ) : null}
        {description ? (
          <AlertDescriptionNode
            description={description}
            descriptionStyle={descriptionStyle}
            descriptionClassName={classNames(`${prefix}-description`, descriptionClassName)}
          />
        ) : null}
      </div>
      {closable ? <AlertCloseNode className={`${prefix}-close`} onClick={handleClose} /> : null}
    </div>
  ) : null;
});

export default Alert;
