import React, { DOMAttributes, ForwardedRef, PointerEventHandler, useMemo } from 'react';
import classNames from 'classnames';
import { useStyle } from './style';
import { omit } from '@/_utils/object';

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
  children?: React.ReactNode[] | React.ReactNode;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 子元素包裹容器类名
   */
  itemClassName?: string;
  /**
   * @description 子元素包裹容器样式
   */
  itemStyle?: React.CSSProperties;
}

const privateKeys = ['size', 'direction', 'block', 'wrap', 'style', 'className'];

function isFragment(el: React.ReactNode): boolean {
  try {
    return (el as React.ReactElement)?.type?.toString?.() === React.Fragment.toString();
  } catch (e) {
    return false;
  }
}

const Space = React.forwardRef(
  (props: SpaceProps & DOMAttributes<HTMLDivElement>, ref: ForwardedRef<HTMLDivElement>) => {
    const style = useStyle('space');
    const { size = 8, direction = 'horizontal' } = props;
    const domAttributes: DOMAttributes<HTMLDivElement> = omit(props, privateKeys);

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
      style.space(),
      props?.wrap && style.wrap(),
      props?.block && style.block(),
      style.direction(direction),
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
  },
);

export default Space;
