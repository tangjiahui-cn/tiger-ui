import * as React from 'react';
import { Input, InputProps, Space } from '..';
import { ArrowDownOutline, ArrowTopOutline } from '../Icon';
import { useEffect, useState } from 'react';
import { isEmpty, isNumber, isNumberString, largeThan, lessThan } from '../_utils';
import styles from './index.less';

export type InputNumberProps = Omit<InputProps, 'suffix' | 'value' | 'onChange'> & {
  // 步进
  step?: number;
  // 值
  value?: number;
  // 最小值
  min?: number;
  // 最大值
  max?: number;
  // 默认值
  defaultValue?: number;
  // 值改变回调事件
  onChange?: (value: number) => void;
  // 原始输入框输入回调
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputNumber(props: InputNumberProps) {
  const { step = 1, min, max } = props;
  const [value, setValue] = useState<string>(
    isNumberString(`${props?.defaultValue}`) ? `${props?.defaultValue}` : '',
  );

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
      {...props}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      suffixStyle={{ marginRight: 0 }}
      suffix={
        <Space direction={'vertical'} size={0} style={{}}>
          <span className={styles['inputNumber-btn']} onClick={handleAdd}>
            <ArrowTopOutline style={{ pointerEvents: 'none' }} fontSize={12} />
          </span>
          <span className={styles['inputNumber-btn']} onClick={handleDec}>
            <ArrowDownOutline style={{ pointerEvents: 'none' }} fontSize={12} />
          </span>
        </Space>
      }
    />
  );
}
