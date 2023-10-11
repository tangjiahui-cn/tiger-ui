import React, { PointerEventHandler, useMemo } from 'react';
import classNames from 'classnames';
import { useStyle } from './style';

export type SpaceDirection = 'vertical' | 'horizontal';

export interface SpaceProps {
  /**
   * 间距大小
   * @description 相邻元素间距像素
   * @default 8
   */
  size?: number;
  /**
   * 排列方向
   * @description 元素排列的方向
   * @default horizontal
   */
  direction?: SpaceDirection;
  /**
   * 是否块元素
   * @description 宽度是否100%
   * @default false
   */
  block?: boolean;
  /**
   * 自动换行
   * @description 是否自动换行（仅在 horizontal 时生效）
   * @default false
   */
  wrap?: boolean;
  /**
   * 容器样式
   * @description 容器内联样式
   */
  style?: React.CSSProperties;
  /**
   * 内部元素
   * @description 包裹元素
   */
  children?: React.ReactNode;
  /**
   * @description 鼠标按下回调
   */
  onPointerDown?: PointerEventHandler<any> | undefined;
}

export default function Space(props: SpaceProps) {
  const style = useStyle('space');

  const classes = classNames(
    style.space(),
    props?.wrap && style.wrap(),
    props?.block && style.block(),
    style.direction(props?.direction || 'horizontal'),
  );

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
