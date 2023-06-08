import * as React from 'react';
import styles from './index.less';
import classNames from 'classnames';

export type TagType = 'success' | 'error' | 'info' | 'warn';

export interface TagProps {
  // 字体颜色
  color?: string;
  // 边框颜色
  borderColor?: string;
  // 背景颜色
  bgColor?: string;
  // 是否有边框
  bordered?: boolean;
  // 类型（预设了4种）
  type?: TagType;
  // 样式
  style?: React.CSSProperties;
  // 子元素
  children?: any;
}

export default function Tag(props: TagProps) {
  const { color, bgColor, bordered = true, borderColor, type } = props;

  const classes = classNames(styles.tag, {
    [styles['tag-no-border']]: !bordered,
    [styles['tag-success']]: type === 'success',
    [styles['tag-error']]: type === 'error',
    [styles['tag-warn']]: type === 'warn',
    [styles['tag-info']]: type === 'info',
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
