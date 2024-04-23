import * as React from 'react';
import { DOMAttributes, ForwardedRef, RefAttributes, useEffect, useState } from 'react';
import classNames from 'classnames';
import { isBoolean } from '@/_utils';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import { omit } from '@/_utils/object';
import './switch.less';

export interface BaseSwitchProps {
  /**
   * @description 选中元素样式
   */
  checkedStyle?: React.CSSProperties;
  /**
   * @description 未选中元素样式
   */
  unCheckedStyle?: React.CSSProperties;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 受控选中
   */
  checked?: boolean;
  /**
   * @description 默认选中
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * @description 自定义选中元素
   */
  checkedChildren?: React.ReactNode;
  /**
   * @description 未选中元素
   */
  unCheckedChildren?: React.ReactNode;
  /**
   * @description 选中状态回调
   */
  onChange?: (checked: boolean) => void;
  /**
   * @description 样式
   */
  style?: React.CSSProperties;
  /**
   * className
   */
  className?: string;
}
export type BaseSwitchPropsKeys = keyof BaseSwitchProps;
export type SwitchProps = BaseSwitchProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

const privateKeys: BaseSwitchPropsKeys[] = [
  'checkedStyle',
  'unCheckedStyle',
  'disabled',
  'checked',
  'defaultChecked',
  'checkedChildren',
  'unCheckedChildren',
  'onChange',
  'style',
  'className',
];

export type SwitchFC = React.ForwardRefExoticComponent<SwitchProps>;
const Switch: SwitchFC = React.forwardRef(function (
  props: SwitchProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const [checked, setChecked] = useState<boolean>(!!props?.defaultChecked);
  const prefix = usePrefix('switch');
  const originKeys: DOMAttributes<HTMLDivElement> = omit(props, privateKeys);

  function handleChecked() {
    const targetChecked = !checked;
    props?.onChange?.(targetChecked);
    if (!isBoolean(props?.checked)) {
      setChecked(targetChecked);
    }
  }

  useEffect(() => {
    if (isBoolean(props?.checked)) {
      setChecked(props?.checked);
    }
  }, [props?.checked]);

  return (
    <div
      {...originKeys}
      style={{ width: 48, ...props?.style }}
      className={classNames(
        props?.className,
        prefix,
        checked && `${prefix}-checked`,
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
