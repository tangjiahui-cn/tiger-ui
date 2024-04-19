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

export type BaseInputPropsKeys = keyof BaseInputProps;
export type InputProps = BaseInputProps &
  React.HTMLAttributes<HTMLInputElement> &
  RefAttributes<HTMLInputElement>;

const privateKeys: BaseInputPropsKeys[] = [
  'maxLength',
  'value',
  'size',
  'prefix',
  'suffix',
  'placeholder',
  'disabled',
  'prefixStyle',
  'suffixStyle',
  'onChange',
  'onBlur',
  'onKeyDown',
];

export type InputFC = React.ForwardRefExoticComponent<InputProps>;
const Input: InputFC = React.forwardRef(function (
  props: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const locale = useLocale();
  const prefix = usePrefix('input');
  const prefixWrap = `${prefix}-wrap`;
  const originProps: DOMAttributes<HTMLInputElement> = omit(props, privateKeys);

  const isPure = !(props.prefix || props.suffix);

  const InputEl = (
    <input
      {...(isPure ? originProps : undefined)}
      ref={ref}
      maxLength={props?.maxLength}
      style={(isPure && props?.style) || undefined}
      disabled={props.disabled}
      className={classNames(
        isPure && props?.className,
        prefix,
        `${prefix}-${props?.size || 'middle'}`,
        isPure && `${prefix}-pure`,
      )}
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
    <span
      {...(!isPure ? originProps : undefined)}
      className={classNames(
        !isPure && props?.className,
        prefixWrap,
        props?.disabled && `${prefixWrap}-disabled`,
      )}
      style={props?.style}
    >
      {props?.prefix && (
        <span className={`${prefixWrap}-prefix`} style={props?.prefixStyle}>
          {props?.prefix}
        </span>
      )}
      {InputEl}
      {props.suffix && (
        <span className={`${prefixWrap}-suffix`} style={props?.suffixStyle}>
          {props?.suffix}
        </span>
      )}
      <span className={`${prefixWrap}-border`} />
    </span>
  );
});

export default Input;
