/**
 * Mask
 *
 * @author tangjiahui
 * @date 2024/6/21
 */

import { usePrefix } from '@/ConfigProvider';
import classNames from 'classnames';
import { DOMAttributes } from 'react';
import './mask.less';

export interface MaskProps extends DOMAttributes<HTMLDivElement> {
  /** disable mask animation */
  disabledAnimation?: boolean;
  /** mask animation duration */
  animationDuration?: number;
  /** show mask or not. (don't remove node while visible is false) */
  visible?: boolean;
  /** mask style */
  style?: React.CSSProperties;
  /** mask className */
  className?: string;
  /** mask children */
  children?: React.ReactNode;
}

const Mask = function (props: MaskProps) {
  const {
    visible,
    className,
    style,
    children,
    disabledAnimation,
    animationDuration = 300,
    ...rest
  } = props;
  const prefix = usePrefix('mask');

  const classes: string = classNames(prefix, className, {
    [`${prefix}-appear`]: visible,
    [`${prefix}-disappear`]: !visible,
    [`${prefix}-no-animation`]: disabledAnimation,
  });

  return (
    <div
      {...rest}
      className={classes}
      style={{
        animationDuration: `${animationDuration}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Mask;
