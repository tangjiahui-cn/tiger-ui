import React from 'react';
import Styles from './index.less';

export interface IButtonProps {
  type: 'primary' | 'default' | 'dashed';
}

export default function () {

  return <button className={Styles.my_btn}>按钮</button>
}
