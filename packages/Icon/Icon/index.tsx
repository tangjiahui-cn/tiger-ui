import React from 'react';
import { FillIcon, OutlineIcon } from '../type';
import styles from './index.less';
import classNames from 'classnames';

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
}

export type IconProps = {
  // 图标类型
  iconName: IconType;
} & IconCommonProps;

export default function Icon(props: IconProps) {
  const { fontSize = 16 } = props;

  return (
    <span className={classNames(styles['icon-wrapper'], props?.pointer && styles['icon-pointer'])}>
      <a
        className={classNames(styles['icon'], props?.spin && styles['icon-spin'])}
        style={{ color: props?.color, fontSize }}
      >
        <svg className='tiger-ui-icon' aria-hidden='true'>
          <use xlinkHref={`#icon-${props?.iconName}`} />
        </svg>
      </a>
    </span>
  );
}
