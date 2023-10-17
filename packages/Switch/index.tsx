import * as React from 'react';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { isBoolean } from '../_utils';
import { useStyle } from './style';

export interface SwitchProps {
  /**
   * @description 样式
   */
  style?: React.CSSProperties;
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
}

export default function Switch(props: SwitchProps) {
  const [checked, setChecked] = useState<boolean>(!!props?.defaultChecked);
  const style = useStyle('switch');

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
      style={{ width: 48, ...props?.style }}
      className={classNames(
        style.switchClass(),
        checked && style.switchChecked(),
        props?.disabled && style.switchDisabled(),
      )}
      onMouseUp={() => !props?.disabled && handleChecked()}
    >
      <div className={style.switchInner()}>
        <div className={style.switchInnerChecked()}>{props?.checkedChildren}</div>
        <div className={style.switchInnerUnChecked()}>{props?.unCheckedChildren}</div>
      </div>
      <div className={style.switchCircle()} />
    </div>
  );
}
