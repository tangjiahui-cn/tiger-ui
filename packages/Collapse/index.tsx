import * as React from 'react';
import styles from './index.less';
import { useEffect, useState } from 'react';
import Item, { CollapseItemProps } from '@/Collapse/Item';
import { ArrowRightOutline } from '@/Icon';

type CollapseOption = Omit<CollapseItemProps, 'expand' | 'onExpand'>;

export interface CollapseProps {
  icon?: React.ReactNode;
  // 关闭时是否销毁
  destroy?: boolean;
  // 激活key
  value?: string[];
  // 选项列表
  options?: CollapseOption[];
  // 手风琴
  accordion?: boolean;
  // 样式
  style?: React.CSSProperties;
  // 改变回调
  onChange?: (value: string[]) => void;
}

export default function Collapse(props: CollapseProps) {
  const { icon = <ArrowRightOutline fontSize={12} pointer /> } = props;
  const isValue = Array.isArray(props?.value);
  const [options, setOptions] = useState<CollapseItemProps[]>([]);

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
    <div className={styles['collapse']} style={props?.style}>
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
