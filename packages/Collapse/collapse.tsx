/**
 * Collapse
 *
 * @author tangjiahui
 * @date 2024/04/15
 */
import React, { DOMAttributes, ForwardedRef, RefAttributes, useEffect, useState } from 'react';
import { ArrowRightOutline } from '@/Icon';
import Item, { CollapseItemProps } from '@/Collapse/collapseItem';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import { omit } from '@/_utils/object';
import classNames from 'classnames';
import './collapse.less';

export type CollapseOption = Omit<CollapseItemProps, 'expand' | 'onExpand'>;
export interface BaseCollapseProps {
  /**
   * @description 自定义图标
   */
  icon?: React.ReactNode;
  /**
   * @description 关闭时是否销毁
   * @default false
   */
  destroy?: boolean;
  /**
   * @description 受控属性
   */
  value?: string[];
  /**
   * @description 选项配置
   */
  options?: CollapseOption[];
  /**
   * @description 手风琴模式
   * @default false
   */
  accordion?: boolean;
  /**
   * @description 值改变回调
   */
  onChange?: (value: string[]) => void;
  /**
   * @description style
   */
  style?: React.CSSProperties;
  /**
   * @description className
   */
  className?: string;
}

export type BaseCollapsePropsKeys = keyof BaseCollapseProps;
export type CollapseProps = BaseCollapseProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

const privateKeys: BaseCollapsePropsKeys[] = [
  'icon',
  'destroy',
  'value',
  'options',
  'accordion',
  'onChange',
  'style',
  'className',
];

export type CollapseFC = React.ForwardRefExoticComponent<CollapseProps>;
const Collapse: CollapseFC = React.forwardRef(function (
  props: CollapseProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { icon = <ArrowRightOutline fontSize={12} pointer /> } = props;
  const isValue = Array.isArray(props?.value);
  const [options, setOptions] = useState<CollapseItemProps[]>([]);
  const originProps: DOMAttributes<HTMLDivElement> = omit(props, privateKeys);
  const prefix = usePrefix('collapse');

  function handleExpand(item: CollapseItemProps, expand: boolean) {
    item.expand = expand;

    if (props?.accordion && expand) {
      setOptions(
        options.map((x) => {
          return {
            ...x,
            expand: x.key === item.key,
          };
        }),
      );
      return;
    }
    setOptions([...options]);
  }

  useEffect(() => {
    if (Array.isArray(props?.options)) {
      setOptions(props?.options);
    }
  }, [props?.options]);

  return (
    <div
      ref={ref}
      {...originProps}
      className={classNames(prefix, props?.className)}
      style={props?.style}
    >
      {options?.map((item: CollapseItemProps) => {
        const { key = '' } = item;
        return (
          <Item
            key={key}
            icon={icon}
            destroy={props?.destroy}
            expand={isValue ? props?.value?.includes(key) : item?.expand}
            onExpand={(expand) => {
              if (isValue) {
                let value: string[];
                if (props?.accordion) {
                  value = expand ? [key] : [];
                } else {
                  value = props?.value?.filter((x) => x !== key) || [];
                  if (expand) {
                    value.push(key);
                  }
                }
                props?.onChange?.(value);
                return;
              }

              handleExpand(item, expand);
            }}
            {...item}
          />
        );
      })}
    </div>
  );
});
export default Collapse;
