import React from "react";
import Styles from './index.less';

export interface InputProps {
  value: string;
}
export default function Input () {
  return <input className={Styles.my_input} placeholder={'请输入'}/>
}
