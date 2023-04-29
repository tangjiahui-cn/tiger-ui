import React, { useMemo } from 'react';
import styles from './index.less';
import { SizeType } from '../_types/common';

export interface InputProps {
  // TODO: 允许清空(使用图标库) // 是否允许清空
  // allowClear?: boolean;
  // 绑定值
  value?: string;
  // 输入框大小
  size?: SizeType;
  // 输入框前缀
  prefix?: string | JSX.Element;
  // 输入框后缀
  suffix?: string | JSX.Element;
  // 输入框占位符
  placeholder?: string;
  // onChange回调事件
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  const [classes, isPure] = useMemo(() => {
    const isPure = !(props.prefix || props.suffix);
    const classes = [styles['input'], styles[`input-${props.size}`], isPure && styles['input-only']]
      .filter(Boolean)
      .join(' ');
    return [classes, isPure];
  }, [props.prefix, props.suffix, props.size]);

  const InputEl = (
    <input
      className={classes}
      placeholder={props?.placeholder}
      value={props?.value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        props?.onChange?.(e);
      }}
    />
  );

  if (isPure) {
    return InputEl;
  }

  return (
    <span className={styles['input-wrapper']}>
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
