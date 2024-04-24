/**
 * Tabs
 *
 * @author tangjiahui
 * @date 2024/7/7
 */
import * as React from 'react';
import { DOMAttributes, ForwardedRef, RefAttributes, useState } from 'react';
import classNames from 'classnames';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import './tabs.less';
import { omit } from '@/_utils/object';

export interface TabsOption {
  key: string;
  label: string;
  value?: React.ReactNode;
}

export interface BaseTabsProps {
  /**
   * @description tabs的选项配置
   */
  options?: TabsOption[];
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
  /**
   * @description 样式
   */
  style?: React.CSSProperties;
  /**
   * className
   */
  className?: string;
}
export type BaseTabsPropsKeys = keyof BaseTabsProps;
export type TabsProps = BaseTabsProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

const privateKeys: BaseTabsPropsKeys[] = [
  'options',
  'barStyle',
  'bodyStyle',
  'destroy',
  'defaultActiveKey',
  'activeKey',
  'onChange',
  'className',
  'style',
];

export type TabsFC = React.ForwardRefExoticComponent<TabsProps>;

const Tabs: TabsFC = React.forwardRef(function Tabs(
  props: TabsProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const prefix = usePrefix('tabs');
  const originProps: DOMAttributes<HTMLDivElement> = omit(props, privateKeys);

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
    <div
      {...originProps}
      className={classNames(props?.className, prefix)}
      style={props?.style}
      ref={ref}
    >
      <div className={`${prefix}-bar`} style={props?.barStyle}>
        {props?.options?.map((x) => {
          const isChoose = activeKey === x.key;
          return (
            <div
              key={x?.key}
              onClick={() => handleClick(x)}
              className={classNames(`${prefix}-bar-item`, isChoose && `${prefix}-bar-item-choose`)}
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
              className={`${prefix}-body`}
              style={{ display: isVisible ? 'block' : 'none', ...props?.bodyStyle }}
            >
              {x?.value}
            </div>
          )
        );
      })}
    </div>
  );
});

export default Tabs;
