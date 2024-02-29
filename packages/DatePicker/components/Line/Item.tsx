/**
 * datepicker line item.
 *
 * @author tangjiahui
 * @date 2024/2/29
 */
import React from 'react';
import { css } from 'class-css';
import classNames from 'classnames';

const selectClass = css({
  background: '#4e92e8',
  color: 'white',
});

const itemInnerClass = css({
  width: '100%',
  height: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 3,
});

const itemClass = css({
  flex: 1,
  boxSizing: 'border-box',
  userSelect: 'none',
  cursor: 'text',
  padding: 4,
});

const hoverClass = css({
  cursor: 'pointer',
  [`&:hover .${itemInnerClass}`]: {
    background: 'whitesmoke',
  },
  [`&:hover .${selectClass}`]: {
    background: '#4e92e8',
  },
});

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
  return (
    <div
      style={props?.style}
      className={classNames(itemClass, props?.className, props?.selectable && hoverClass)}
      onClick={props?.selectable ? props?.onClick : undefined}
      onMouseEnter={props?.onMouseEnter}
      onMouseLeave={props?.onMouseLeave}
    >
      <div
        className={classNames(
          props?.innerClassName,
          props?.isSelect && selectClass,
          itemInnerClass,
        )}
      >
        {props?.children}
      </div>
    </div>
  );
}
