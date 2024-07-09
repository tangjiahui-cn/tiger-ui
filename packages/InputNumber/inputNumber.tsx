import { Input, InputProps, Space } from '..';
import React, { DOMAttributes, RefAttributes, useEffect, useState } from 'react';
import { isEmpty, isNumber, isNumberString, largeThan, lessThan } from '@/_utils';
import { ArrowDownOutline, ArrowTopOutline } from '@/Icon';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import './inputNumber.less';

export interface BaseInputNumberProps extends Omit<InputProps, 'suffix' | 'value' | 'onChange'> {
  /** step addition */
  step?: number;
  /** controlled value from outside */
  value?: number;
  /** min value */
  min?: number;
  /** max value */
  max?: number;
  /** default value */
  defaultValue?: number;
  /** onchange callback */
  onChange?: (value: number) => void;
  /** oninput callback */
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type InputNumberProps = BaseInputNumberProps &
  DOMAttributes<HTMLInputElement> &
  RefAttributes<HTMLInputElement>;

export type InputNumberFC = React.ForwardRefExoticComponent<InputNumberProps>;
const InputNumber: InputNumberFC = React.forwardRef(function InputNumber(
  props: InputNumberProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const { step = 1, value, min, max, defaultValue, onChange, onInput, ...reset } = props;
  const prefix = usePrefix('inputNumber');

  const [innerValue, setInnerValue] = useState<string>(
    isNumberString(`${props?.defaultValue}`) ? `${props?.defaultValue}` : '',
  );

  // 是否受控外界的 value
  const isOutValue = props?.value !== undefined;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInnerValue(e.target.value);
    props?.onInput?.(e);
  }

  function handleBlur(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (!isNumberString(value)) {
      setInnerValue('');
      props?.onChange?.(0);
      return;
    }

    let v = Number(value);
    if (isNumber(min) && v < min) v = min;
    else if (isNumber(max) && v > max) v = max;
    props?.onChange?.(v);
  }

  function getBaseValue(): number {
    if (!innerValue) return 0;
    const v = Number(innerValue);
    return isNaN(v) ? 0 : v;
  }

  function handleAdd() {
    let v = getBaseValue();
    v += step;
    v = isNumber(max) ? lessThan(v, max) : v;
    props?.onChange?.(v);
    !isOutValue && setInnerValue(`${v}`);
  }

  function handleDec() {
    let v = getBaseValue();
    v -= step;
    v = isNumber(min) ? largeThan(v, min) : v;
    props?.onChange?.(v);
    !isOutValue && setInnerValue(`${v}`);
  }

  useEffect(() => {
    if (props?.value === undefined) return;
    setInnerValue(isEmpty(props?.value) ? '' : `${props?.value}`);
  }, [props?.value]);

  return (
    <Input
      {...reset}
      ref={ref}
      value={innerValue}
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
