import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { isBoolean } from '../_utils';
import { useStyle } from './style';

export interface CheckBoxProps {
  // 是否选中
  checked?: boolean;
  // 半选中
  indeterminate?: boolean;
  // 默认选中
  defaultChecked?: boolean;
  // 改变选中状态回调
  onChange?: (checked: boolean) => void;
  // 多选框样式
  style?: React.CSSProperties;
  // 子元素
  children?: any;
}

export default function CheckBox(props: CheckBoxProps) {
  const [checked, setChecked] = useState<boolean>(!!props?.defaultChecked);
  const style = useStyle('checkbox');

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
    <span onClick={handleClick} className={style.checkbox()} style={props?.style}>
      <span
        className={classNames(
          style.checkboxIcon(),
          !props?.indeterminate && checked && style.checkboxIconChecked(),
          props?.indeterminate && style.checkboxIconIndeterminate(),
        )}
      />
      <span>{props?.children}</span>
    </span>
  );
}
