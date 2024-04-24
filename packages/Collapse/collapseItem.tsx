import { useLayoutEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Empty } from '..';
import * as React from 'react';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import './collapseItem.less';

export interface CollapseItemProps {
  // key 值
  key?: string;
  // 标题
  label?: React.ReactNode;
  // 内容
  children?: React.ReactNode;
  // 是否展开
  expand?: boolean;
  // 关闭时是否销毁
  destroy?: boolean;
  // 样式
  style?: React.CSSProperties;
  // 标题样式
  labelStyle?: React.CSSProperties;
  // 内容样式
  childrenStyle?: React.CSSProperties;
  // 图标
  icon?: React.ReactNode;
  // 展开切换回调
  onExpand?: (expand: boolean) => void;
}

export default function CollapseItem(props: CollapseItemProps) {
  const childrenRef = useRef<any>();
  const [height, setHeight] = useState<number>(0);
  const prefix = usePrefix('collapseItem');

  function handleClickLabel() {
    props?.onExpand?.(!props?.expand);
  }

  useLayoutEffect(() => {
    if (props?.expand) {
      const boundInfo = (childrenRef.current as any)?.getBoundingClientRect();
      setHeight(boundInfo.height);
    }
  }, [props?.expand]);

  return (
    <div className={prefix} style={props?.style}>
      <div
        className={`${prefix}-label`}
        onClick={() => handleClickLabel()}
        style={props?.labelStyle}
      >
        {props?.icon && (
          <div
            className={classNames(
              `${prefix}-label-icon`,
              props?.expand && `${prefix}-label-icon-expand`,
            )}
          >
            {props?.icon}
          </div>
        )}
        {props?.label}
      </div>
      <div style={{ height: props?.expand ? height : 0 }} className={`${prefix}-body`}>
        {(!props?.destroy || props?.expand) && (
          <div className={`${prefix}-body-children`} ref={childrenRef} style={props?.childrenStyle}>
            {props?.children || <Empty />}
          </div>
        )}
      </div>
    </div>
  );
}
