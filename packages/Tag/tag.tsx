/**
 * tag
 *
 * @author tangjiahui
 * @date 2023/6/7
 */
import classNames from 'classnames';
import React, { DOMAttributes, ForwardedRef, RefAttributes } from 'react';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import './tag.less';

export type TagType = 'success' | 'error' | 'info' | 'warn';
export interface BaseTagProps {
  /** font color */
  color?: string;
  /** border color */
  borderColor?: string;
  /** background color */
  bgColor?: string;
  /** if show bordered */
  bordered?: boolean;
  /** tag type */
  type?: TagType;
  /** style */
  style?: React.CSSProperties;
  /** className */
  className?: string;
}

export type TagProps = BaseTagProps & DOMAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>;

export type TagFC = React.ForwardRefExoticComponent<TagProps>;
const Tag: TagFC = React.forwardRef(function (props: TagProps, ref: ForwardedRef<HTMLDivElement>) {
  const { bordered = true, color, borderColor, bgColor, type, style, className, ...rest } = props;
  const prefix = usePrefix('tag');

  const classes = classNames(
    props?.className,
    prefix,
    props?.type && `${prefix}-${props?.type}`,
    !bordered && `${prefix}-no-border`,
  );

  return (
    <div
      {...rest}
      className={classes}
      ref={ref}
      style={{
        color: props?.color,
        borderColor: props?.borderColor,
        backgroundColor: props?.bgColor,
        ...props?.style,
      }}
    >
      {props?.children}
    </div>
  );
});

export default Tag;
