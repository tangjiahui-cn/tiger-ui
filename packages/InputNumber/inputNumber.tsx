import { Input, InputProps, Space } from '..';
import React, { DOMAttributes, RefAttributes, useEffect, useState } from 'react';
import { isEmpty, isNumber, isNumberString, largeThan, lessThan } from '@/_utils';
import { ArrowDownOutline, ArrowTopOutline } from '@/Icon';
import { omit } from '@/_utils/object';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import './inputNumber.less';

export interface BaseInputNumberProps extends Omit<InputProps, 'suffix' | 'value' | 'onChange'> {
  /**
   * @description 步进
   * @default 1
   */
  step?: number;
  /**
   * @description 受控值
   */
  value?: number;
  /**
   * @description 最小值
   */
  min?: number;
  /**
   * @description 最大值
   */
  max?: number;
  /**
   * @description 默认值
   */
  defaultValue?: number;
  /**
   * @description 值改变回调事件
   */
  onChange?: (value: number) => void;
  /**
   * @description 原始输入框输入回调
   */
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type BaseInputNumberPropsKeys = keyof BaseInputNumberProps;
export type InputNumberProps = BaseInputNumberProps &
  DOMAttributes<HTMLInputElement> &
  RefAttributes<HTMLInputElement>;

const privateKeys: BaseInputNumberPropsKeys[] = [
  'step',
  'value',
  'min',
  'max',
  'defaultValue',
  'onChange',
  'onInput',
];

export type InputNumberFC = React.ForwardRefExoticComponent<InputNumberProps>;
const InputNumber: InputNumberFC = React.forwardRef(function InputNumber(
  props: InputNumberProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const { step = 1, min, max } = props;
  const prefix = usePrefix('inputNumber');

  const [value, setValue] = useState<string>(
    isNumberString(`${props?.defaultValue}`) ? `${props?.defaultValue}` : '',
  );

  const originProps = omit(props, privateKeys);

  // 是否受控外界的 value
  const isOutValue = props?.value !== undefined;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    props?.onInput?.(e);
  }

  function handleBlur(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (!isNumberString(value)) {
      setValue('');
      props?.onChange?.(0);
      return;
    }

    let v = Number(value);
    if (isNumber(min) && v < min) v = min;
    else if (isNumber(max) && v > max) v = max;
    props?.onChange?.(v);
  }

  function getBaseValue(): number {
    if (!value) return 0;
    const v = Number(value);
    return isNaN(v) ? 0 : v;
  }

  function handleAdd() {
    let v = getBaseValue();
    v += step;
    v = isNumber(max) ? lessThan(v, max) : v;
    props?.onChange?.(v);
    !isOutValue && setValue(`${v}`);
  }

  function handleDec() {
    let v = getBaseValue();
    v -= step;
    v = isNumber(min) ? largeThan(v, min) : v;
    props?.onChange?.(v);
    !isOutValue && setValue(`${v}`);
  }

  useEffect(() => {
    if (props?.value === undefined) return;
    setValue(isEmpty(props?.value) ? '' : `${props?.value}`);
  }, [props?.value]);

  return (
    <Input
      {...originProps}
      ref={ref}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      suffixStyle={{ marginRight: 0 }}
      suffix={
        <Space direction={'vertical'} size={0} className={prefix}>
          <span className={`${prefix}-btn`} onClick={handleAdd}>
            <ArrowTopOutline style={{ pointerEvents: 'none' }} fontSize={12} />
          </span>
          <span className={`${prefix}-btn`} onClick={handleDec}>
            <ArrowDownOutline style={{ pointerEvents: 'none' }} fontSize={12} />
          </span>
        </Space>
      }
    />
  );
});

export default InputNumber;
