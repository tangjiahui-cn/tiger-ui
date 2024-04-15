/**
 * Button
 *
 * @author tangjiahui
 * @date 2023/03/16
 */
import React, { DOMAttributes, ForwardedRef } from 'react';
import classNames from 'classnames';
import { SizeType as ButtonSize } from '../_types/common';
import { useGlobal } from '@/_hooks';
import './button.less';
import { omit } from '@/_utils/object';

export type ButtonType = 'primary' | 'dashed' | 'default' | 'text' | 'dotted';
export type { ButtonSize };

export interface BaseButtonProps {
  /**
   * @description 按钮类型
   * @default default
   */
  type?: ButtonType;
  /**
   * @description 按钮禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 是否块级按钮，即宽度100%。
   * @default false
   */
  block?: boolean;
  /**
   * @description 是否危险按钮，危险按钮颜色为醒目色。
   * @default false
   */
  danger?: boolean;
  /**
   * @description 按钮大小，有三种默认尺寸。
   * @default false
   */
  size?: ButtonSize;
  /**
   * @description 保持聚焦（点击后选中样式不会消失，点击其他地方取消选中）
   * @default false
   */
  stayFocus?: boolean;
  /**
   * @description 保持选中（受控状态）
   * @default false
   */
  focus?: boolean;
  /**
   * @description 加载中
   * @default false
   */
  loading?: boolean;
  /**
   * @description style
   */
  style?: React.CSSProperties;
  /**
   * @description className
   */
  className?: string;
}

export type BaseButtonPropsKeys = keyof BaseButtonProps;
export type ButtonProps = BaseButtonProps & DOMAttributes<HTMLButtonElement>;

const privateKeys: BaseButtonPropsKeys[] = [
  'type',
  'disabled',
  'block',
  'danger',
  'size',
  'style',
  'className',
  'stayFocus',
  'focus',
  'loading',
];

const Button: React.ForwardRefExoticComponent<ButtonProps> = React.forwardRef(function (
  props: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const { prefix } = useGlobal('btn');
  const originProps: DOMAttributes<HTMLButtonElement> = omit(props, privateKeys);

  const classes = classNames(
    props?.className,
    prefix,
    `${prefix}-${props?.type || 'default'}`,
    `${prefix}-${props?.size || 'middle'}`,
    props?.block && `${prefix}-block`,
    props?.danger && `${prefix}-danger`,
    props?.focus && `${prefix}-focus`,
    props?.stayFocus && `${prefix}-stayFocus`,
  );

  return (
    <button
      {...originProps}
      className={classes}
      ref={ref}
      style={props?.style}
      disabled={props?.disabled}
    >
      {props?.children}
    </button>
  );
});

export default Button;
