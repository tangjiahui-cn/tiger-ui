import React, { MouseEventHandler, useRef } from 'react';
import styles from './index.less';
import { LoadingOutline } from '../Icon';
import classNames from 'classnames';
import { SizeType } from '../_types/common';

export type ButtonType = 'primary' | 'dashed' | 'default' | 'text' | 'dotted';
export type ButtonSize = SizeType;

export interface ButtonProps {
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
   * @description 按钮加载中
   * @default false
   */
  loading?: boolean;
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
   * @description 点击按钮回调事件
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /**
   * @description 子元素
   */
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
      onClick={props?.loading ? undefined : props?.onClick}
      style={props?.style}
    >
      {props?.loading && (
        <span className={styles['btn-loading']}>
          <LoadingOutline fontSize={14} />
        </span>
      )}
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
