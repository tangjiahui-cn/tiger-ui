/**
 * Space
 *
 * @author tangjiahui
 * @date 2023/5/1
 */

import React, { DOMAttributes, ForwardedRef, RefAttributes, useMemo } from 'react';
import classNames from 'classnames';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import './space.less';

export type SpaceDirection = 'vertical' | 'horizontal';
export interface BaseSpaceProps {
  /** gap */
  size?: number;
  /** display direction */
  direction?: SpaceDirection;
  /** block status */
  block?: boolean;
  /** auto wrap */
  wrap?: boolean;
  /** space item className */
  itemClassName?: string;
  /** space item style */
  itemStyle?: React.CSSProperties;
  /** space style */
  style?: React.CSSProperties;
  /** space children */
  children?: React.ReactNode[] | React.ReactNode;
  /** space className */
  className?: string;
}

export type SpaceProps = BaseSpaceProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

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
  const {
    size = 8,
    direction = 'horizontal',
    block,
    wrap,
    itemClassName,
    itemStyle,
    children,
    style,
    className,
    ...rest
  } = props;

  const prefix = usePrefix('space');

  const innerChildren = useMemo(() => {
    let list: React.ReactNode[] = Array.isArray(children) ? children : children ? [children] : [];

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
  }, [children]);

  const classes = classNames(
    prefix,
    wrap && `${prefix}-wrap`,
    block && `${prefix}-block`,
    `${prefix}-${direction}`,
    className,
  );

  return (
    <div {...rest} ref={ref} className={classes} style={{ gap: size, ...(style || {}) }}>
      {innerChildren?.map((x: React.ReactNode, index) => {
        const key = (x as React.ReactElement)?.key || index;
        return (
          <div key={key} style={itemStyle} className={itemClassName}>
            {x}
          </div>
        );
      })}
    </div>
  );
});

export default Space;
