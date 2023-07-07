import * as React from 'react';
import { useState } from 'react';
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
  // tabs样式
  style?: React.CSSProperties;
  // tabs_bar样式
  barStyle?: React.CSSProperties;
  // tabs_body
  bodyStyle?: React.CSSProperties;
  // 切换时是否销毁
  destroy?: boolean;
  // 当前激活tab
  activeKey?: string;
  // 切换tab回调
  onChange?: (activeKey: string, node: TabsOption) => void;
}
export default function Tabs(props: TabsProps) {
  const [activeKey, setActiveKey] = useState<string>(props?.options?.[0]?.key || '');

  function handleClick(option: TabsOption) {
    if (props?.onChange || props?.activeKey) {
      props?.onChange?.(option?.key, option);
      return;
    }
    setActiveKey(option?.key);
  }

  return (
    <div className={styles['tabs']} style={props?.style}>
      <div className={styles['tabs-bar']} style={props?.barStyle}>
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
      {props?.options?.map((x) => {
        const isVisible = x.key === activeKey;
        return (
          (isVisible || !props?.destroy) && (
            <div
              key={x.key}
              className={styles['tabs-body']}
              style={{ display: isVisible ? 'block' : 'none', ...props?.bodyStyle }}
            >
              {x?.value}
            </div>
          )
        );
      })}
    </div>
  );
}
