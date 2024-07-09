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

export interface TabsOption {
  key: string;
  label: string;
  value?: React.ReactNode;
}

export interface BaseTabsProps {
  /** tabs options */
  options?: TabsOption[];
  /** tabs bar style */
  barStyle?: React.CSSProperties;
  /** tabs body style */
  bodyStyle?: React.CSSProperties;
  /** if destroy on close */
  destroy?: boolean;
  /** default active key */
  defaultActiveKey?: string;
  /** controlled active key from outside */
  activeKey?: string;
  /** change callback */
  onChange?: (activeKey: string, node: TabsOption) => void;
  /** style */
  style?: React.CSSProperties;
  /** className */
  className?: string;
}

export type TabsProps = BaseTabsProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

export type TabsFC = React.ForwardRefExoticComponent<TabsProps>;

const Tabs: TabsFC = React.forwardRef(function Tabs(
  props: TabsProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {
    options,
    barStyle,
    bodyStyle,
    destroy,
    defaultActiveKey,
    activeKey,
    onChange,
    className,
    style,
    ...rest
  } = props;
  const prefix = usePrefix('tabs');

  const [innerActiveKey, setInnerActiveKey] = useState<string>(
    activeKey || defaultActiveKey || options?.[0]?.key || '',
  );

  function handleClick(option: TabsOption) {
    if (onChange || activeKey) {
      onChange?.(option?.key, option);
      return;
    }
    setInnerActiveKey(option?.key);
  }

  return (
    <div {...rest} className={classNames(className, prefix)} style={style} ref={ref}>
      <div className={`${prefix}-bar`} style={barStyle}>
        {options?.map((x) => {
          const isChoose = innerActiveKey === x.key;
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
      {options?.map((x) => {
        const isVisible = x.key === innerActiveKey;
        return (
          (isVisible || !destroy) && (
            <div
              key={x.key}
              className={`${prefix}-body`}
              style={{ display: isVisible ? 'block' : 'none', ...bodyStyle }}
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
