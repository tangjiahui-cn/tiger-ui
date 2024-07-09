/**
 * Empty
 *
 * @author tangjiahui
 * @date 2023/6/28
 */
import React, { DOMAttributes, ForwardedRef, RefAttributes } from 'react';
import { EmptyFill, EmptyOutline } from '@/Icon';
import classNames from 'classnames';
import './empty.less';
import { useLocale, usePrefix } from '@/ConfigProvider/ConfigProvider';

export interface BaseEmptyProps {
  /** custom icon */
  icon?: React.ReactNode;
  /** fill type */
  type?: 'default' | 'fill';
  /** message */
  message?: React.ReactNode;
  /** message style */
  messageStyle?: React.CSSProperties;
  /** if show border */
  bordered?: boolean;
  /** style */
  style?: React.CSSProperties;
  /** className */
  className?: string;
}

export type EmptyProps = BaseEmptyProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

const iconSize = 40;

export type EmptyFC = React.ForwardRefExoticComponent<EmptyProps>;
const Empty: EmptyFC = React.forwardRef(function (
  props: EmptyProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const locale = useLocale();
  const {
    type = 'default',
    message = locale.emptyValue,
    icon,
    messageStyle,
    bordered,
    style,
    className,
    ...rest
  } = props;

  const prefix = usePrefix('empty');

  function getDefaultIcon() {
    if (type === 'default') return <EmptyOutline fontSize={iconSize} />;
    if (type === 'fill') return <EmptyFill fontSize={iconSize} />;
    return <></>;
  }

  return (
    <div
      {...rest}
      className={classNames(prefix, bordered && `${prefix}-border`, className)}
      style={style}
      ref={ref}
    >
      {icon || getDefaultIcon()}
      {message && (
        <div className={`${prefix}-message`} style={messageStyle}>
          {message}
        </div>
      )}
    </div>
  );
});

export default Empty;
