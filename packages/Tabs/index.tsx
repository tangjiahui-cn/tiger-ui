import * as React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import { useStyle } from './style';

export interface TabsOption {
  key: string;
  label: string;
  value?: React.ReactNode;
}

export interface TabsProps {
  /**
   * @description tabs的选项配置
   */
  options?: TabsOption[];
  /**
   * @description 样式
   */
  style?: React.CSSProperties;
  /**
   * @description tabsBar 样式
   */
  barStyle?: React.CSSProperties;
  /**
   * @description tabsBody 样式
   */
  bodyStyle?: React.CSSProperties;
  /**
   * @description 切换时是否销毁
   * @default false
   */
  destroy?: boolean;
  /**
   * @description 默认激活tab
   */
  defaultActiveKey?: string;
  /**
   * @description 受控值
   */
  activeKey?: string;
  /**
   * @description 切换tab回调
   */
  onChange?: (activeKey: string, node: TabsOption) => void;
}
export default function Tabs(props: TabsProps) {
  const style = useStyle('tabs');
  const [activeKey, setActiveKey] = useState<string>(
    props?.activeKey || props?.defaultActiveKey || props?.options?.[0]?.key || '',
  );

  function handleClick(option: TabsOption) {
    if (props?.onChange || props?.activeKey) {
      props?.onChange?.(option?.key, option);
      return;
    }
    setActiveKey(option?.key);
  }

  return (
    <div className={style.tabs()} style={props?.style}>
      <div className={style.tabsBar()} style={props?.barStyle}>
        {props?.options?.map((x) => {
          const isChoose = activeKey === x.key;
          return (
            <div
              key={x?.key}
              onClick={() => handleClick(x)}
              className={classNames(style.tabsBarItem(), isChoose && style.tabsBarItemChoose())}
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
              className={style.tabsBody()}
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
