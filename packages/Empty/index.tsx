import * as React from 'react';
import { EmptyOutline, EmptyFill } from '../Icon';
import classNames from 'classnames';
import { useGetConfig } from '../ConfigProvider';
import { useStyle } from './style';

export interface EmptyProps {
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
   * @description 组件样式
   */
  style?: React.CSSProperties;
}

const iconSize = 40;
export default function Empty(props: EmptyProps) {
  const { locale } = useGetConfig();
  const { type = 'default', message = locale.emptyValue } = props;
  const style = useStyle('empty');

  function getDefaultIcon() {
    if (type === 'default') return <EmptyOutline fontSize={iconSize} />;
    if (type === 'fill') return <EmptyFill fontSize={iconSize} />;
    return <></>;
  }

  return (
    <div
      style={props?.style}
      className={classNames(style.empty(), props?.bordered && style.emptyBorder())}
    >
      {props?.icon || getDefaultIcon()}
      {message && (
        <div className={style.emptyMessage()} style={props?.messageStyle}>
          {message}
        </div>
      )}
    </div>
  );
}
