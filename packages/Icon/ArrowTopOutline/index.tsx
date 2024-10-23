import * as React from 'react';
import { Icon, IconCommonProps } from '..';
import { UpOutlined } from '@ant-design/icons';

export default function ArrowTopOutline(props: IconCommonProps) {
  return (
    <UpOutlined
      style={{
        cursor: props?.pointer ? 'pointer' : 'default',
        color: props?.color,
        fontSize: props?.fontSize || 16,
        ...props?.style,
      }}
    />
  );
}
