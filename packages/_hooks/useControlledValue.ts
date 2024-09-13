/**
 * useControlledValue （控制默认值、受控值）
 *
 * @author tangjiahui
 * @date 2024/7/18
 */
import { Dispatch, SetStateAction, useMemo, useState } from 'react';

export function useControlledValue<T>(
  /** 初始值 */
  initial: T | (() => T),
  /** 配置项 */
  option?: {
    /** 默认值 */
    defaultValue?: T;
    /** 外部受控值 */
    value?: T;
    /** setState 值回调函数 */
    onChange?: (newValue: T) => void;
  },
): [T | undefined, Dispatch<SetStateAction<T>>, boolean] {
  const { value, defaultValue, onChange } = option || {};
  const isControlledOutSide = useMemo(() => value !== undefined, [value]);
  const [state, setState] = useState<T>(defaultValue === undefined ? initial : defaultValue);
  const targetState = isControlledOutSide ? value : state;

  function handleSetState(newValue: SetStateAction<T>) {
    const target = typeof newValue === 'function' ? (newValue as any)?.(targetState) : newValue;
    if (!isControlledOutSide) {
      setState(target);
    }
    onChange?.(target);
  }

  return [targetState, handleSetState, isControlledOutSide];
}
