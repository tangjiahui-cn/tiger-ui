/**
 * Button
 *
 * @author tangjiahui
 * @date 2023/3/16
 * @modified 2024/5/28
 */
import { SizeType } from '@/_types';
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import { usePrefix } from '@/ConfigProvider';
import classNames from 'classnames';
import { LoadingOutlined } from '@ant-design/icons';
import Wave from './wave';
import './button.less';
import Loading from './loading';

export type ButtonSize = SizeType;
export type ButtonType = 'default' | 'primary' | 'dashed' | 'dotted' | 'text';
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** button size */
  size?: ButtonSize;
  /** button type */
  type?: ButtonType;
  /** button loading */
  loading?: boolean;
  /** if disabled */
  disabled?: boolean;
  /** danger style */
  danger?: boolean;
  /** block style */
  block?: boolean;
  /** ghost style */
  ghost?: boolean;
  /** style attribute */
  style?: React.CSSProperties;
  /** className attribute */
  className?: string;
  /** button content */
  children?: React.ReactNode;
  /** onClick event */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const {
    size = 'middle',
    type = 'default',
    loading,
    disabled,
    danger,
    block,
    ghost,
    style,
    className,
    children,
    onClick,
    ...rest
  } = props;
  const prefix = usePrefix('btn');

  const classes = classNames(
    props?.className,
    prefix,
    {
      [`${prefix}-block`]: block,
      [`${prefix}-danger`]: danger,
      [`${prefix}-ghost`]: ghost,
      [`${prefix}-loading`]: loading,
    },
    `${prefix}-${size}`,
    `${prefix}-${type}`,
  );

  return (
    <Wave disabled={loading || disabled}>
      <button
        {...rest}
        ref={ref}
        style={style}
        disabled={disabled}
        className={classes}
        onClick={loading ? undefined : onClick}
      >
        <Loading loading={loading}>
          <LoadingOutlined />
        </Loading>
        {children}
      </button>
    </Wave>
  );
});

export default Button;
