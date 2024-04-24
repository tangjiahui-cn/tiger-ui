/**
 * Space
 *
 * @author tangjiahui
 * @date 2023/5/1
 */

import React, { DOMAttributes, ForwardedRef, RefAttributes, useMemo } from 'react';
import classNames from 'classnames';
import { omit } from '@/_utils/object';
import './space.less';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';

export type SpaceDirection = 'vertical' | 'horizontal';
export interface BaseSpaceProps {
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
   * @description 子元素包裹容器类名
   */
  itemClassName?: string;
  /**
   * @description 子元素包裹容器样式
   */
  itemStyle?: React.CSSProperties;
  /**
   * 容器样式
   * @description 容器内联样式
   */
  style?: React.CSSProperties;
  /**
   * 内部元素
   * @description 包裹元素
   */
  children?: React.ReactNode[] | React.ReactNode;
  /**
   * @description 类名
   */
  className?: string;
}
export type BaseSpacePropsKeys = keyof BaseSpaceProps;
export type SpaceProps = BaseSpaceProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

const privateKeys: BaseSpacePropsKeys[] = [
  'size',
  'direction',
  'block',
  'wrap',
  'itemClassName',
  'itemStyle',
  'children',
  'style',
  'className',
];

export type SpaceFC = React.ForwardRefExoticComponent<SpaceProps>;

function isFragment(el: React.ReactNode): boolean {
  try {
    return (el as React.ReactElement)?.type?.toString?.() === React.Fragment.toString();
  } catch (e) {
    return false;
  }
}

const Space: SpaceFC = React.forwardRef(function (
  props: SpaceProps & DOMAttributes<HTMLDivElement>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { size = 8, direction = 'horizontal' } = props;
  const domAttributes: DOMAttributes<HTMLDivElement> = omit(props, privateKeys);

  const prefix = usePrefix('space');

  const children = useMemo(() => {
    let list: React.ReactNode[] = Array.isArray(props?.children)
      ? props.children
      : props?.children
      ? [props.children]
      : [];

    list = list.reduce((result: React.ReactNode[], x: React.ReactNode) => {
      if (isFragment(x)) {
        result.push(...(x as any)?.props?.children);
      } else if (Array.isArray(x)) {
        result.push(...x);
      } else if (![undefined, null].includes(x as any)) {
        result.push(x);
      }
      return result;
    }, []);
    return list;
  }, [props?.children]);

  const classes = classNames(
    prefix,
    props?.wrap && `${prefix}-wrap`,
    props?.block && `${prefix}-block`,
    `${prefix}-${direction}`,
    props?.className,
  );

  return (
    <div
      {...domAttributes}
      ref={ref}
      className={classes}
      style={{ gap: size, ...(props?.style || {}) }}
      onPointerDown={props?.onPointerDown}
    >
      {children?.map((x: React.ReactNode, index) => {
        const key = (x as React.ReactElement)?.key || index;
        return (
          <div key={key} style={props?.itemStyle} className={props?.itemClassName}>
            {x}
          </div>
        );
      })}
    </div>
  );
});

export default Space;
