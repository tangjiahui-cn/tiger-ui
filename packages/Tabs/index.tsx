import * as React from 'react';
import { useMemo, useState } from 'react';
import styles from './index.less';
import classNames from 'classnames';

export interface TabsOption {
  key: string;
  label: string;
  value?: React.ReactNode;
}

export interface TabsProps {
  // 选项
  options?: TabsOption[];
  // 当前激活tab
  activeKey?: string;
  // 切换tab回调
  onChange?: (activeKey: string, node: TabsOption) => void;
}
export default function Tabs(props: TabsProps) {
  const [activeKey, setActiveKey] = useState<string>(props?.options?.[0]?.key || '');

  const tabMap: { [k: string]: any } = useMemo(() => {
    return (
      props?.options?.reduce(
        (pre, cur) =>
          Object.assign(pre, {
            [cur.key]: cur,
          }),
        {},
      ) || {}
    );
  }, [props?.options]);

  function handleClick(option: TabsOption) {
    if (props?.onChange || props?.activeKey) {
      props?.onChange?.(option?.key, option);
      return;
    }
    setActiveKey(option?.key);
  }

  return (
    <div className={styles['tabs']}>
      <div className={styles['tabs-bar']}>
        {props?.options?.map((x) => {
          const isChoose = activeKey === x.key;
          return (
            <div
              key={x?.key}
              onClick={() => handleClick(x)}
              className={classNames(
                styles['tabs-bar-item'],
                isChoose && styles['tabs-bar-item-choose'],
              )}
            >
              {x.label}
            </div>
          );
        })}
      </div>
      <div className={styles['tabs-children']}>{tabMap?.[activeKey]?.value}</div>
    </div>
  );
}
