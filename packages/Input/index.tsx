import React from 'react';
import { SizeType as InputSize } from '../_types/common';
import { useGetLocaleValues } from '../ConfigProvider';
import classNames from 'classnames';
import { useStyle } from './style';
export type { InputSize };

export interface InputProps {
  /**
   * @description 输入框最大输入长度
   * @default undefined
   */
  maxLength?: number;
  /**
   * @description 输入框受控绑定值
   * @default undefined
   */
  value?: string;
  /**
   * @description 输入框大小
   * @default middle
   */
  size?: InputSize;
  /**
   * @description 输入框前缀
   */
  prefix?: React.ReactNode;
  /**
   * @description 输入框后缀
   */
  suffix?: React.ReactNode;
  /**
   * @description 输入框占位符
   * @default 请输入
   */
  placeholder?: string;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 输入框样式
   */
  style?: React.CSSProperties;
  /**
   * @description 前缀样式
   */
  prefixStyle?: React.CSSProperties;
  /**
   * @description 后缀样式
   */
  suffixStyle?: React.CSSProperties;
  /**
   * @description onChange回调事件
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * @description onKeyDown回调事件
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /**
   * @description onBlur回调事件
   */
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  const locale = useGetLocaleValues();
  const style = useStyle('input');

  const isPure = !(props.prefix || props.suffix);

  const wrapperClasses = classNames(
    style.inputWrapper(),
    props?.disabled && style.wrapperDisabled(),
  );

  const classes = classNames(
    style.input(),
    style.size(props?.size || 'middle'),
    isPure && style.pure(),
  );

  const InputEl = (
    <input
      maxLength={props?.maxLength}
      style={(isPure && props?.style) || undefined}
      disabled={props.disabled}
      className={classes}
      placeholder={props?.placeholder || locale.inputPlaceholder}
      value={props?.value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        props?.onChange?.(e);
      }}
      onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
        props?.onBlur?.(e);
      }}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
        props?.onKeyDown?.(e);
      }}
    />
  );

  if (isPure) {
    return InputEl;
  }

  return (
    <span className={wrapperClasses} style={props?.style}>
      {props?.prefix && (
        <span className={style.prefix()} style={props?.prefixStyle}>
          {props?.prefix}
        </span>
      )}
      {InputEl}
      {props.suffix && (
        <span className={style.suffix()} style={props?.suffixStyle}>
          {props?.suffix}
        </span>
      )}
      <span className={style.border()} />
    </span>
  );
}

Input.defaultProps = {
  size: 'middle',
};
