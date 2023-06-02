import React, { PointerEventHandler, useMemo } from 'react';
import styles from './index.less';
import classNames from 'classnames';

export interface SpaceProps {
  // 间距大小
  size?: number;
  // 方向
  direction?: 'vertical' | 'horizontal';
  // 是否块元素（宽度等于父元素宽度）
  block?: boolean;
  // 是否自动换行（仅在 horizontal 时生效）
  wrap?: boolean;
  // 容器样式
  style?: React.CSSProperties;
  // 子元素
  children?: React.ReactNode;
  // 鼠标按下回调
  onPointerDown?: PointerEventHandler<any> | undefined;
}

export default function Space(props: SpaceProps) {
  const classes = useMemo(() => {
    return classNames(
      styles['space'],
      props?.wrap && styles['space-wrap'],
      props?.block && styles['space-block'],
      props?.direction === 'vertical' && styles['space-vertical'],
    );
  }, [props.block, props?.block, props?.direction]);

  return (
    <div
      className={classes}
      style={{ gap: props?.size, ...(props?.style || {}) }}
      onPointerDown={props?.onPointerDown}
    >
      {props?.children}
    </div>
  );
}

Space.defaultProps = {
  size: 8,
  wrap: false,
  direction: 'horizontal',
};
