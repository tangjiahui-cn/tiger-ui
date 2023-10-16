import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { isBoolean } from '../_utils';
import { useStyle } from './style';

export interface RadioProps {
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
   * @description 子元素
   */
  children?: any;
}

export default function Radio(props: RadioProps) {
  const inputRef = useRef(null);
  const [checked, setChecked] = useState<boolean>(!!props?.defaultChecked);
  const style = useStyle('radio');

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
    <span className={style.radio()} onClick={() => handleClick()}>
      <input ref={inputRef} type={'radio'} checked={checked} onChange={(e) => null} />
      <label className={style.radioCircle()} />
      <span className={style.radioContent()}>{props?.children}</span>
    </span>
  );
}
