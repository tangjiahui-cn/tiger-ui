/**
 * Radio
 *
 * @author tangjiahui
 * @adate 2023/6/8
 */
import * as React from 'react';
import { DOMAttributes, RefAttributes, useEffect, useRef, useState } from 'react';
import { isBoolean } from '@/_utils';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import classNames from 'classnames';
import './radio.less';

export interface BaseRadioProps {
  /** controlled checked from outside */
  checked?: boolean;
  /** default checked */
  defaultChecked?: boolean;
  /** status change callback */
  onChange?: (checked: boolean) => void;
  /** style */
  style?: React.CSSProperties;
  /** className */
  className?: string;
  /** label children */
  children?: React.ReactNode;
}

export type RadioProps = BaseRadioProps &
  DOMAttributes<HTMLSpanElement> &
  RefAttributes<HTMLSpanElement>;

export type RadioPropsFC = React.ForwardRefExoticComponent<RadioProps>;
const Radio: RadioPropsFC = React.forwardRef(function (
  props: RadioProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) {
  const { checked, defaultChecked, onChange, className, style, children, ...rest } = props;

  const inputRef = useRef(null);
  const [innerChecked, setInnerChecked] = useState<boolean>(!!defaultChecked);
  const prefix = usePrefix('radio');

  function handleClick() {
    !innerChecked && onChange?.(true);
    if (isBoolean(checked) || innerChecked) return;
    setInnerChecked(true);
  }

  useEffect(() => {
    if (isBoolean(checked)) {
      setInnerChecked(checked);
      onChange?.(checked);
    }
  }, [checked]);

  return (
    <span
      {...rest}
      style={style}
      className={classNames(className, prefix)}
      onClick={() => handleClick()}
      ref={ref}
    >
      <input ref={inputRef} type={'radio'} checked={innerChecked} onChange={(e) => null} />
      <label className={`${prefix}-circle`} />
      <span className={`${prefix}-content`}>{children}</span>
    </span>
  );
});

export default Radio;
