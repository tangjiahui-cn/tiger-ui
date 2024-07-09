/**
 * Switch
 *
 * @author tangjiahui
 * @date 2024/4/23
 */
import * as React from 'react';
import { DOMAttributes, ForwardedRef, RefAttributes, useEffect, useState } from 'react';
import classNames from 'classnames';
import { isBoolean } from '@/_utils';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import './switch.less';

export interface BaseSwitchProps {
  /** checked style */
  checkedStyle?: React.CSSProperties;
  /** unchecked style */
  unCheckedStyle?: React.CSSProperties;
  /** disabled status */
  disabled?: boolean;
  /** controlled checked from outside */
  checked?: boolean;
  /** default checked */
  defaultChecked?: boolean;
  /** checked children */
  checkedChildren?: React.ReactNode;
  /** unchecked children */
  unCheckedChildren?: React.ReactNode;
  /** change callback */
  onChange?: (checked: boolean) => void;
  /** style */
  style?: React.CSSProperties;
  /** className */
  className?: string;
}

export type SwitchProps = BaseSwitchProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

export type SwitchFC = React.ForwardRefExoticComponent<SwitchProps>;
const Switch: SwitchFC = React.forwardRef(function (
  props: SwitchProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {
    checkedStyle,
    unCheckedStyle,
    disabled,
    checked,
    defaultChecked,
    checkedChildren,
    unCheckedChildren,
    onChange,
    style,
    className,
    ...rest
  } = props;
  const [innerChecked, setInnerChecked] = useState<boolean>(!!props?.defaultChecked);
  const prefix = usePrefix('switch');

  function handleChecked() {
    const targetChecked = !innerChecked;
    props?.onChange?.(targetChecked);
    if (!isBoolean(props?.checked)) {
      setInnerChecked(targetChecked);
    }
  }

  useEffect(() => {
    if (isBoolean(props?.checked)) {
      setInnerChecked(props?.checked);
    }
  }, [props?.checked]);

  return (
    <div
      {...rest}
      style={{ width: 48, ...props?.style }}
      className={classNames(
        props?.className,
        prefix,
        innerChecked && `${prefix}-checked`,
        props?.disabled && `${prefix}-disabled`,
      )}
      onMouseUp={(e) => {
        props?.onMouseUp?.(e);
        !props?.disabled && handleChecked();
      }}
      ref={ref}
    >
      <div className={`${prefix}-inner`}>
        <div className={`${prefix}-inner-checked`}>{props?.checkedChildren}</div>
        <div className={`${prefix}-inner-unchecked`}>{props?.unCheckedChildren}</div>
      </div>
      <div className={`${prefix}-circle`} />
    </div>
  );
});

export default Switch;
