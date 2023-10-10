import React, { useEffect, useState } from 'react';
import styles from './index.less';
import classNames from 'classnames';
import { isBoolean } from '../_utils';

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
    <span onClick={handleClick} className={styles['checkbox']} style={props?.style}>
      <span
        className={classNames(
          styles['checkbox-icon'],
          !props?.indeterminate && checked && styles['checkbox-icon-checked'],
          props?.indeterminate && styles['checkbox-icon-indeterminate'],
        )}
      />
      <span>{props?.children}</span>
    </span>
  );
}
