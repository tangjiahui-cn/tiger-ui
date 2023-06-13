import * as React from 'react';
import styles from './index.less';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { isBoolean } from '@/_utils';

export interface SwitchProps {
  // 样式
  style?: React.CSSProperties;
  // 选中元素样式
  checkedStyle?: React.CSSProperties;
  // 未选中元素样式
  unCheckedStyle?: React.CSSProperties;
  // 禁用
  disabled?: boolean;
  // 是否选中
  checked?: boolean;
  // 默认选中
  defaultChecked?: boolean;
  // 选中元素
  checkedChildren?: React.ReactNode;
  // 未选中元素
  unCheckedChildren?: React.ReactNode;
  // 选中状态回调
  onChange?: (checked: boolean) => void;
}

export default function Switch(props: SwitchProps) {
  const { style = {} } = props;
  const [checked, setChecked] = useState<boolean>(!!props?.defaultChecked);

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
      style={{ width: 48, ...style }}
      className={classNames(
        styles['switch'],
        checked && styles['switch-checked'],
        props?.disabled && styles['switch-disabled'],
      )}
      onMouseUp={() => !props?.disabled && handleChecked()}
    >
      <div className={styles['switch-inner']}>
        <div className={styles['switch-inner-checked']}>{props?.checkedChildren}</div>
        <div className={styles['switch-inner-unchecked']}>{props?.unCheckedChildren}</div>
      </div>
      <div className={styles['switch-circle']} />
    </div>
  );
}
