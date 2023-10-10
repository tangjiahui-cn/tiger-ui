import * as React from 'react';
import styles from './index.less';
import { useEffect, useRef, useState } from 'react';
import { isBoolean } from '../_utils';

export interface RadioProps {
  // 受控的选中
  checked?: boolean;
  // 默认选中
  defaultChecked?: boolean;
  // 改变选中状态回调
  onChange?: (checked: boolean) => void;
  // 子元素
  children?: any;
}

export default function Radio(props: RadioProps) {
  const inputRef = useRef(null);
  const [checked, setChecked] = useState<boolean>(!!props?.defaultChecked);

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
    <span className={styles.radio} onClick={() => handleClick()}>
      <input ref={inputRef} type={'radio'} checked={checked} onChange={(e) => null} />
      <label className={styles['radio-circle']} />
      <span className={styles['radio-content']}>{props?.children}</span>
    </span>
  );
}
