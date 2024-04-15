/**
 * Checkbox
 *
 * @author tangjiahui
 * @date 2024/6/21
 */
import React, { DOMAttributes, useEffect, useState } from 'react';
import { isBoolean } from '@/_utils';
import classNames from 'classnames';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import { omit } from '@/_utils/object';
import './checkbox.less';

export interface BaseCheckBoxProps {
  /**
   * 是否选中
   */
  checked?: boolean;
  /**
   * 半选中
   */
  indeterminate?: boolean;
  /**
   * 默认选中
   */
  defaultChecked?: boolean;
  /**
   * 改变选中状态回调
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

export type BaseCheckBoxPropsKeys = keyof BaseCheckBoxProps;
export type CheckBoxProps = BaseCheckBoxProps & DOMAttributes<HTMLSpanElement>;

const privateKeys: BaseCheckBoxPropsKeys[] = [
  'checked',
  'indeterminate',
  'defaultChecked',
  'onChange',
  'style',
  'className',
];

export type CheckBoxFC = React.ForwardRefExoticComponent<CheckBoxProps>;
const CheckBox: CheckBoxFC = React.forwardRef(function (
  props: CheckBoxProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) {
  const prefix = usePrefix('checkbox');
  const [checked, setChecked] = useState<boolean>(!!props?.defaultChecked);
  const originProps: DOMAttributes<HTMLSpanElement> = omit(props, privateKeys);

  function handleClick() {
    const targetChecked = !checked;
    if (props?.onChange) {
      props?.onChange?.(targetChecked);
      return;
    }
    if (isBoolean(props?.checked)) {
      return;
    }
    setChecked(targetChecked);
  }

  useEffect(() => {
    if (isBoolean(props?.checked)) {
      setChecked(props?.checked);
    }
  }, [props?.checked]);

  return (
    <span
      {...originProps}
      onClick={handleClick}
      className={classNames(props?.className, prefix)}
      style={props?.style}
      ref={ref}
    >
      <span
        className={classNames(
          `${prefix}-icon`,
          !props?.indeterminate && checked && `${prefix}-checked`,
          props?.indeterminate && `${prefix}-indeterminate`,
        )}
      />
      <span>{props?.children}</span>
    </span>
  );
});

export default CheckBox;
