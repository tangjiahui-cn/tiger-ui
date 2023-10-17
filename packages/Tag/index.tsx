import * as React from 'react';
import classNames from 'classnames';
import { useStyle } from './style';

export type TagType = 'success' | 'error' | 'info' | 'warn';

export interface TagProps {
  /**
   * @description 字体颜色
   */
  color?: string;
  /**
   * @description 边框颜色
   */
  borderColor?: string;
  /**
   * @description 背景颜色
   */
  bgColor?: string;
  /**
   * @description 是否有边框
   * @default true
   */
  bordered?: boolean;
  /**
   * @description 标签类型（四种）
   */
  type?: TagType;
  /**
   * @description 样式
   */
  style?: React.CSSProperties;
  /**
   * @description 标签子元素
   */
  children?: any;
}

export default function Tag(props: TagProps) {
  const { color, bgColor, bordered = true, borderColor, type } = props;
  const style = useStyle('tag');

  const classes = classNames(style.tag(), {
    [style.tagNoBorder()]: !bordered,
    [style.tagSuccess()]: type === 'success',
    [style.tagError()]: type === 'error',
    [style.tagWarn()]: type === 'warn',
    [style.tagInfo()]: type === 'info',
  });

  return (
    <div
      className={classes}
      style={{
        color,
        borderColor,
        backgroundColor: bgColor,
      }}
    >
      {props?.children}
    </div>
  );
}
