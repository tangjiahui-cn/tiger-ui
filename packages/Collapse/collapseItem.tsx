import { useLayoutEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Empty } from '..';
import * as React from 'react';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import './collapseItem.less';

export interface CollapseItemProps {
  /** key */
  key?: string;
  /** label */
  label?: React.ReactNode;
  /** item content */
  children?: React.ReactNode;
  /** if expand */
  expand?: boolean;
  /** if destroy on close */
  destroy?: boolean;
  /** style */
  style?: React.CSSProperties;
  /** label style */
  labelStyle?: React.CSSProperties;
  /** children style */
  childrenStyle?: React.CSSProperties;
  /** custom icon */
  icon?: React.ReactNode;
  /** expand callback */
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
