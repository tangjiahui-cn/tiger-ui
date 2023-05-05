import React, { useMemo } from 'react';
import styles from './index.less';
import { SizeType } from '../_types/common';

export interface InputProps {
  // TODO: 后面允许清空(使用图标库)
  // 是否允许清空
  // allowClear?: boolean;
  // 最大长度
  maxLength?: number;
  // 绑定值
  value?: string;
  // 输入框大小
  size?: SizeType;
  // 输入框前缀
  prefix?: React.ReactNode;
  // 输入框后缀
  suffix?: React.ReactNode;
  // 输入框占位符
  placeholder?: string;
  // 禁止选中输入框
  disabled?: boolean;
  // 输入框样式
  style?: React.CSSProperties;
  // onChange回调事件
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onKeyDown事件
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  const [wrapperClasses, classes, isPure] = useMemo(() => {
    const isPure = !(props.prefix || props.suffix);
    const wrapperClasses = [
      styles['input-wrapper'],
      props.disabled && styles['input-wrapper-disabled'],
    ]
      .filter(Boolean)
      .join(' ');
    const classes = [styles['input'], styles[`input-${props.size}`], isPure && styles['input-pure']]
      .filter(Boolean)
      .join(' ');
    return [wrapperClasses, classes, isPure];
  }, [props.prefix, props.suffix, props.size]);

  const InputEl = (
    <input
      maxLength={props?.maxLength}
      style={(isPure && props?.style) || undefined}
      disabled={props.disabled}
      className={classes}
      placeholder={props?.placeholder}
      value={props?.value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        props?.onChange?.(e);
      }}
      onKeyDown={(e) => {
        props?.onKeyDown?.(e);
      }}
    />
  );

  if (isPure) {
    return InputEl;
  }

  return (
    <span className={wrapperClasses} style={props?.style}>
      {props?.prefix && <span className={styles['input-fix-prefix']}>{props?.prefix}</span>}
      {InputEl}
      {props.suffix && <span className={styles['input-fix-suffix']}>{props?.suffix}</span>}
      <span className={styles['input-border']} />
    </span>
  );
}

Input.defaultProps = {
  size: 'middle',
};
