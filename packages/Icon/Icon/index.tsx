import React from 'react';
import { FillIcon, OutlineIcon } from '../type';
import classNames from 'classnames';
import { useStyle } from './style';

export type IconType = OutlineIcon | FillIcon;

export interface IconCommonProps {
  // 是否旋转
  spin?: boolean;
  // 颜色
  color?: string;
  // 显示手形
  pointer?: boolean;
  // 大小
  fontSize?: number;
  // 样式
  style?: React.CSSProperties;
}

export type IconProps = {
  // 图标类型
  iconName: IconType;
} & IconCommonProps;

export default function Icon(props: IconProps) {
  const { fontSize = 16 } = props;
  const style = useStyle('icon');

  return (
    <span
      className={classNames(style.iconWrapper(), props?.pointer && style.pointer())}
      style={props?.style}
    >
      <a
        className={classNames(style.icon(), props?.spin && style.spin())}
        style={{ color: props?.color, fontSize }}
      >
        <svg className='tiger-ui-icon' aria-hidden='true'>
          <use xlinkHref={`#icon-${props?.iconName}`} />
        </svg>
      </a>
    </span>
  );
}
