/**
 * input
 *
 * @author tangjiahui
 * @date 2023/4/17
 */
import React, { DOMAttributes, RefAttributes } from 'react';
import { SizeType as InputSize } from '../_types/common';
import classNames from 'classnames';
import { omit } from '@/_utils/object';
import { usePrefix, useLocale } from '@/ConfigProvider/ConfigProvider';
import './input.less';

export type { InputSize };
export interface BaseInputProps {
  /** max input length */
  maxLength?: number;
  /** controlled value from outside */
  value?: string;
  /** input box size */
  size?: InputSize;
  /** input prefix */
  prefix?: React.ReactNode;
  /** input suffix */
  suffix?: React.ReactNode;
  /** input placeholder */
  placeholder?: string;
  /** if disabled */
  disabled?: boolean;
  /** prefix style */
  prefixStyle?: React.CSSProperties;
  /** suffix style */
  suffixStyle?: React.CSSProperties;
  /** change callback */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** onKeydown event callback */
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /** onBlur event callback */
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** style */
  style?: React.CSSProperties;
  /** className */
  className?: string;
}

export type InputProps = BaseInputProps &
  React.HTMLAttributes<HTMLInputElement> &
  RefAttributes<HTMLInputElement>;

export type InputFC = React.ForwardRefExoticComponent<InputProps>;
const Input: InputFC = React.forwardRef(function (
  props: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const {
    maxLength,
    value,
    size,
    prefix,
    suffix,
    placeholder,
    disabled,
    prefixStyle,
    suffixStyle,
    onChange,
    onBlur,
    onKeyDown,
    style,
    className,
    ...rest
  } = props;
  const locale = useLocale();
  const prefixCls = usePrefix('input');
  const prefixWrapCls = `${prefixCls}-wrap`;

  const isPure = !(prefix || suffix);

  const InputEl = (
    <input
      {...(isPure ? rest : undefined)}
      ref={ref}
      maxLength={maxLength}
      style={(isPure && style) || undefined}
      disabled={disabled}
      className={classNames(
        isPure && className,
        prefixCls,
        `${prefixCls}-${size || 'middle'}`,
        isPure && `${prefixCls}-pure`,
      )}
      placeholder={placeholder || locale.inputPlaceholder}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
      }}
      onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
        onBlur?.(e);
      }}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
        onKeyDown?.(e);
      }}
    />
  );

  if (isPure) {
    return InputEl;
  }

  return (
    <span
      {...(!isPure ? rest : undefined)}
      className={classNames(
        !isPure && className,
        prefixWrapCls,
        disabled && `${prefixWrapCls}-disabled`,
      )}
      style={style}
    >
      {prefix && (
        <span className={`${prefixWrapCls}-prefix`} style={prefixStyle}>
          {prefix}
        </span>
      )}
      {InputEl}
      {suffix && (
        <span className={`${prefixWrapCls}-suffix`} style={suffixStyle}>
          {suffix}
        </span>
      )}
      <span className={`${prefixWrapCls}-border`} />
    </span>
  );
});

export default Input;
