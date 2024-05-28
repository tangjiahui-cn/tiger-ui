/**
 * Alert
 *
 * @author tangjiahui
 * @date 2023/3/16
 * @modified 2024/5/28
 */
import { SizeType } from '@/_types';
import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import { usePrefix } from '@/ConfigProvider';
import classNames from 'classnames';
import { LoadingOutlined } from '@ant-design/icons';
import './button.less';

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
    `${prefix}-${size}`,
    `${prefix}-${type}`,
    block && `${prefix}-block`,
    danger && `${prefix}-danger`,
    ghost && `${prefix}-ghost`,
    loading && `${prefix}-loading`,
  );

  return (
    <button
      {...rest}
      ref={ref}
      style={style}
      disabled={disabled}
      className={classes}
      onClick={loading ? undefined : onClick}
    >
      {loading && <LoadingOutlined style={{ marginRight: 12 }} />}
      {children}
    </button>
  );
});

export default Button;
