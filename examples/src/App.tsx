import * as React from 'react';
import { Button, Notification, Space, Counter } from '../../packages';
import { useEffect, useState } from 'react';

export default function () {
  const [value, setValue] = useState<number>(0);

  return (
    <Space block direction={'vertical'} style={{ padding: 16 }}>
      <Space block>
        计数器：
        <Counter duration={2000} end={value} />
      </Space>
      <Space block>
        <Button onClick={() => setValue(1000)}>1000</Button>
        <Button onClick={() => setValue(999)}>999</Button>
      </Space>
    </Space>
  );
}
