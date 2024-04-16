/**
 * datepicker line item.
 *
 * @author tangjiahui
 * @date 2024/2/29
 */
import React from 'react';
import classNames from 'classnames';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import './item.less';

export type ItemValue = string | number | undefined;

export interface ItemProps {
  selectable?: boolean;
  isSelect?: boolean;
  style?: React.CSSProperties;
  className?: string;
  innerClassName?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}
export default function Line(props: ItemProps) {
  const prefix = usePrefix('datepickerLineItem');
  return (
    <div
      style={props?.style}
      className={classNames(prefix, props?.className, props?.selectable && `${prefix}-select`)}
      onClick={props?.selectable ? props?.onClick : undefined}
      onMouseEnter={props?.onMouseEnter}
      onMouseLeave={props?.onMouseLeave}
    >
      <div
        className={classNames(
          props?.innerClassName,
          props?.isSelect && `${prefix}-inner-select`,
          `${prefix}-inner`,
        )}
      >
        {props?.children}
      </div>
    </div>
  );
}
