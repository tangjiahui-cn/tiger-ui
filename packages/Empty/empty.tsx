/**
 * Empty
 *
 * @author tangjiahui
 * @date 2023/6/28
 */
import React, { DOMAttributes, ForwardedRef, RefAttributes } from 'react';
import { useGetConfig } from '@/ConfigProvider';
import { EmptyFill, EmptyOutline } from '@/Icon';
import classNames from 'classnames';
import { omit } from '@/_utils/object';
import './empty.less';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';

export interface BaseEmptyProps {
  /**
   * @description 自定义空图标
   */
  icon?: React.ReactNode;
  /**
   * @description 自定义填充类型
   * @default default
   */
  type?: 'default' | 'fill';
  /**
   * @description 提示内容
   * @default 暂无数据
   */
  message?: React.ReactNode;
  /**
   * @description 提示语样式
   */
  messageStyle?: React.CSSProperties;
  /**
   * @description 是否显示边框
   * @default false
   */
  bordered?: boolean;
  /**
   * @description style
   */
  style?: React.CSSProperties;
  /**
   * @description className
   */
  className?: string;
}
export type BaseEmptyPropsKeys = keyof BaseEmptyProps;
export type EmptyProps = BaseEmptyProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

const privateKeys: BaseEmptyPropsKeys[] = [];
const iconSize = 40;

export type EmptyFC = React.ForwardRefExoticComponent<EmptyProps>;
const Empty: EmptyFC = React.forwardRef(function (
  props: EmptyProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { locale } = useGetConfig();
  const { type = 'default', message = locale.emptyValue } = props;

  const prefix = usePrefix('empty');
  const originProps: DOMAttributes<HTMLDivElement> = omit(props, privateKeys);

  function getDefaultIcon() {
    if (type === 'default') return <EmptyOutline fontSize={iconSize} />;
    if (type === 'fill') return <EmptyFill fontSize={iconSize} />;
    return <></>;
  }

  return (
    <div
      {...originProps}
      className={classNames(prefix, props?.bordered && `${prefix}-border`, props?.className)}
      style={props?.style}
      ref={ref}
    >
      {props?.icon || getDefaultIcon()}
      {message && (
        <div className={`${prefix}-message`} style={props?.messageStyle}>
          {message}
        </div>
      )}
    </div>
  );
});

export default Empty;
