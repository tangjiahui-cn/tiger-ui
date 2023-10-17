import * as React from 'react';
import { useEffect, useState } from 'react';
import Item, { CollapseItemProps } from './Item';
import { ArrowRightOutline } from '../Icon';
import { useStyle } from './style';

type CollapseOption = Omit<CollapseItemProps, 'expand' | 'onExpand'>;

export interface CollapseProps {
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
   * @description 样式
   */
  style?: React.CSSProperties;
  /**
   * @description 值改变回调
   */
  onChange?: (value: string[]) => void;
}

export default function Collapse(props: CollapseProps) {
  const { icon = <ArrowRightOutline fontSize={12} pointer /> } = props;
  const isValue = Array.isArray(props?.value);
  const [options, setOptions] = useState<CollapseItemProps[]>([]);
  const style = useStyle('collapse');

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
    <div className={style.collapse()} style={props?.style}>
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
}
