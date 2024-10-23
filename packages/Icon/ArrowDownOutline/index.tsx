import * as React from 'react';
import { Icon, IconCommonProps } from '..';
import { DownOutlined } from '@ant-design/icons';

export default function ArrowDownOutline(props: IconCommonProps) {
  return (
    <DownOutlined
      style={{
        cursor: props?.pointer ? 'pointer' : 'default',
        color: props?.color,
        fontSize: props?.fontSize || 16,
        ...props?.style,
      }}
    />
  );
}
