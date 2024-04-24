/**
 * Radio
 *
 * @auythor tangjiahui
 * @adate 2023/6/8
 */
import * as React from 'react';
import { DOMAttributes, RefAttributes, useEffect, useRef, useState } from 'react';
import { isBoolean } from '../_utils';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import classNames from 'classnames';
import { omit } from '@/_utils/object';
import './radio.less';

export interface BaseRadioProps {
  /**
   * @description 受控选中
   */
  checked?: boolean;
  /**
   * @description 默认选中
   */
  defaultChecked?: boolean;
  /**
   * @description 改变选中状态回调
   */
  onChange?: (checked: boolean) => void;
  /**
   * @description style
   */
  style?: React.CSSProperties;
  /**
   * @description className
   */
  className?: string;
}

export type BaseRadioPropsKeys = keyof BaseRadioProps;
export type RadioProps = BaseRadioProps &
  DOMAttributes<HTMLSpanElement> &
  RefAttributes<HTMLSpanElement>;

const privateKeys: BaseRadioPropsKeys[] = ['checked', 'defaultChecked', 'onChange'];

export type RadioPropsFC = React.ForwardRefExoticComponent<RadioProps>;
const Radio: RadioPropsFC = React.forwardRef(function (
  props: RadioProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) {
  const inputRef = useRef(null);
  const [checked, setChecked] = useState<boolean>(!!props?.defaultChecked);
  const prefix = usePrefix('radio');
  const originProps: DOMAttributes<HTMLInputElement> = omit(props, privateKeys);

  function handleClick() {
    !checked && props?.onChange?.(true);
    if (isBoolean(props?.checked) || checked) return;
    setChecked(true);
  }

  useEffect(() => {
    if (isBoolean(props?.checked)) {
      setChecked(props?.checked);
      props?.onChange?.(props?.checked);
    }
  }, [props?.checked]);

  return (
    <span
      {...originProps}
      style={props?.style}
      className={classNames(props?.className, prefix)}
      onClick={() => handleClick()}
      ref={ref}
    >
      <input ref={inputRef} type={'radio'} checked={checked} onChange={(e) => null} />
      <label className={`${prefix}-circle`} />
      <span className={`${prefix}-content`}>{props?.children}</span>
    </span>
  );
});

export default Radio;
