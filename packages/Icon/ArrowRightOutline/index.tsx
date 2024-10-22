import * as React from 'react';
import { IconCommonProps } from '..';
import { CaretRightOutlined } from '@ant-design/icons';

export default function ArrowRightOutline(props: IconCommonProps) {
  return (
    <CaretRightOutlined
      style={{
        color: props?.color,
        fontSize: props?.fontSize,
        cursor: props?.pointer ? 'pointer' : 'default',
        ...props?.style,
      }}
    />
  );
}
