/**
 * Button
 *
 * @author tangjiahui
 * @date 2023/03/16
 */
import React, { DOMAttributes, ForwardedRef } from 'react';
import classNames from 'classnames';
import { SizeType as ButtonSize } from '../_types/common';
import { useStyle } from './style';
import { omit } from '@/_utils/object';
import { LoadingOutlined } from '@ant-design/icons';

export type ButtonType = 'primary' | 'dashed' | 'default' | 'text' | 'dotted';
export type { ButtonSize };

export interface ButtonProps extends DOMAttributes<HTMLButtonElement> {
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
   * @description 按钮内联样式
   */
  style?: React.CSSProperties;
  /**
   * @description 按钮类class
   */
  className?: string;
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
}

const privateKeys = [
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

/**
 * 按钮
 *
 * At 2023/04/24
 * By TangJiaHui
 */
const Button = React.forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const style = useStyle('button');
  const domAttributes: DOMAttributes<HTMLButtonElement> = omit(props, privateKeys);

  const className = classNames([
    style.button(props?.danger),
    style.type(props?.type || 'default'),
    style.size(props?.size || 'middle'),
    props?.block && style.block(),
    props?.danger && style.danger(),
    props?.disabled && style.disabled(),
    props?.stayFocus && style.stayFocus(),
    props?.focus && style.focus(),
    props?.className,
  ]);

  return (
    <button
      {...domAttributes}
      ref={ref}
      className={className}
      disabled={props?.disabled}
      onClick={props?.disabled ? undefined : props?.onClick}
      style={props?.style}
    >
      {props?.children}
      {props?.loading && <LoadingOutlined style={{ marginLeft: 8 }} />}
    </button>
  );
});

export default Button;
