import { Drawer, Space, Button } from '../../packages';
import { useState } from 'react';
import * as React from 'react';

export default function () {
  const [visible, setVisible] = useState(false);
  return (
    <Space>
      <Button onClick={() => setVisible(true)}>点击</Button>
      <Drawer visible={true}>11</Drawer>
    </Space>
  );
}
