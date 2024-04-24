/**
 * tag
 *
 * @author tangjiahui
 * @date 2023/6/7
 */
import classNames from 'classnames';
import React, { DOMAttributes, ForwardedRef, RefAttributes } from 'react';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import { omit } from '@/_utils/object';
import './tag.less';

export type TagType = 'success' | 'error' | 'info' | 'warn';
export interface BaseTagProps {
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
   * className
   */
  className?: string;
}

export type BaseTagPropsKeys = keyof BaseTagProps;
export type TagProps = BaseTagProps & DOMAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>;

const privateKeys: BaseTagPropsKeys[] = [
  'color',
  'borderColor',
  'bgColor',
  'bordered',
  'type',
  'style',
  'className',
];

export type TagFC = React.ForwardRefExoticComponent<TagProps>;
const Tag: TagFC = React.forwardRef(function (props: TagProps, ref: ForwardedRef<HTMLDivElement>) {
  const { bordered = true } = props;

  const prefix = usePrefix('tag');
  const originProps: DOMAttributes<HTMLDivElement> = omit(props, privateKeys);

  const classes = classNames(
    props?.className,
    prefix,
    props?.type && `${prefix}-${props?.type}`,
    !bordered && `${prefix}-no-border`,
  );

  return (
    <div
      {...originProps}
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
