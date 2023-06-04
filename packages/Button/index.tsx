import React, { MouseEventHandler, useMemo, useRef } from 'react';
import styles from './index.less';
import { SizeType } from '../_types/common';
import classNames from 'classnames';

export type ButtonType = 'primary' | 'dashed' | 'default' | 'text' | 'dotted';
export type ButtonSize = SizeType;

export interface ButtonProps {
  // 按钮类型
  type?: ButtonType;
  // 是否禁用
  disabled?: boolean;
  // 块按钮
  block?: boolean;
  // 危险按钮
  danger?: boolean;
  // todo: 按钮添加'加载中'效果
  // // 是否加载中
  // loading?: boolean;
  // 按钮大小
  size?: ButtonSize;
  // 内联样式
  style?: React.CSSProperties;
  // 保持聚焦（点击后选中样式不会消失，点击其他地方取消选中）
  stayFocus?: boolean;
  // 保持选中（受控状态）
  focus?: boolean;
  // onClick回调事件
  onClick?: MouseEventHandler<HTMLButtonElement>;
  // 子元素
  children?: React.ReactNode;
}

/**
 * 按钮
 *
 * At 2023/04/24
 * By TangJiaHui
 */
export default function Button(props: ButtonProps) {
  const btnRef = useRef(null);

  const classes = classNames([
    styles['btn'],
    styles[`btn-${props?.type}`],
    styles[`btn-${props?.size}`],
    props?.danger && styles['btn-danger'],
    props?.block && styles['btn-block'],
    props?.stayFocus && styles['btn-stay-focus'],
    props?.focus && styles['btn-force-focus'],
  ]);

  return (
    <button
      ref={btnRef}
      className={classes}
      disabled={props?.disabled}
      onClick={props?.onClick}
      style={props?.style}
    >
      {props?.children}
    </button>
  );
}

Button.defaultProps = {
  type: 'default',
  block: false,
  disabled: false,
  danger: false,
  // loading: false,
  size: 'middle',
  stayFocus: false,
};
