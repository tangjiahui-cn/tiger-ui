import * as React from 'react';
import { EmptyOutline, EmptyFill } from '@/Icon';
import styles from './index.less';
import classNames from 'classnames';
import { useGetConfig } from '@/ConfigProvider';

export interface EmptyProps {
  // 自定义空图标
  icon?: React.ReactNode;
  // 是否填充类型
  type?: 'default' | 'fill';
  // 提示语
  message?: React.ReactNode;
  // 提示语央视
  messageStyle?: React.CSSProperties;
  // 是否显示边框
  border?: boolean;
  // 样式
  style?: React.CSSProperties;
}

const iconSize = 40;
export default function Empty(props: EmptyProps) {
  const { locale } = useGetConfig();
  const { type = 'default', style = {}, message = locale.emptyValue } = props;

  function getDefaultIcon() {
    if (type === 'default') return <EmptyOutline fontSize={iconSize} />;
    if (type === 'fill') return <EmptyFill fontSize={iconSize} />;
    return <></>;
  }

  return (
    <div
      style={style}
      className={classNames(styles['empty'], props?.border && styles['empty-border'])}
    >
      {props?.icon || getDefaultIcon()}
      {message && (
        <div className={styles['empty-message']} style={props?.messageStyle}>
          {message}
        </div>
      )}
    </div>
  );
}
