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
import classNames from 'classnames';
import './collapse.less';

export type CollapseOption = Omit<CollapseItemProps, 'expand' | 'onExpand'>;
export interface BaseCollapseProps {
  /** custom icon */
  icon?: React.ReactNode;
  /** if destroy on close */
  destroy?: boolean;
  /** controlled value from outside */
  value?: string[];
  /** collapse items */
  options?: CollapseOption[];
  /** accordion mode */
  accordion?: boolean;
  /** change callback */
  onChange?: (value: string[]) => void;
  /** style */
  style?: React.CSSProperties;
  /** className */
  className?: string;
}

export type CollapseProps = BaseCollapseProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

export type CollapseFC = React.ForwardRefExoticComponent<CollapseProps>;
const Collapse: CollapseFC = React.forwardRef(function (
  props: CollapseProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {
    icon = <ArrowRightOutline fontSize={12} pointer />,
    destroy,
    value,
    options,
    accordion,
    onChange,
    style,
    className,
    ...rest
  } = props;
  const isValue = Array.isArray(value);
  const [innerOptions, setInnerOptions] = useState<CollapseItemProps[]>([]);
  const prefix = usePrefix('collapse');

  function handleExpand(item: CollapseItemProps, expand: boolean) {
    item.expand = expand;

    if (accordion && expand) {
      setInnerOptions(
        innerOptions.map((x) => {
          return {
            ...x,
            expand: x.key === item.key,
          };
        }),
      );
      return;
    }
    setInnerOptions([...innerOptions]);
  }

  useEffect(() => {
    if (Array.isArray(options)) {
      setInnerOptions(options);
    }
  }, [options]);

  return (
    <div ref={ref} {...rest} className={classNames(prefix, className)} style={style}>
      {innerOptions?.map((item: CollapseItemProps) => {
        const { key = '' } = item;
        return (
          <Item
            key={key}
            icon={icon}
            destroy={destroy}
            expand={isValue ? value?.includes(key) : item?.expand}
            onExpand={(expand) => {
              if (isValue) {
                let values: string[];
                if (accordion) {
                  values = expand ? [key] : [];
                } else {
                  values = value?.filter((x) => x !== key) || [];
                  if (expand) {
                    values.push(key);
                  }
                }
                onChange?.(values);
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
