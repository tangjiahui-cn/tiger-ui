/**
 * App
 */
import { useLogRenderTime } from '../hooks/useLogRenderTime';
import Button from '@/Button';
import { Input, Space, Drawer } from '@/.';
import { useState } from 'react';

export default function () {
  useLogRenderTime();

  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<any>('top');

  return (
    <Space
      style={{
        padding: 12,
        width: '100%',
        boxSizing: 'border-box',
      }}
      direction={'vertical'}
    >
      <Space>
        {['top', 'left', 'right', 'bottom'].map((x) => {
          return (
            <Button
              key={x}
              onClick={() => {
                setPlacement(x);
                setVisible(true);
              }}
            >
              {x}
            </Button>
          );
        })}
      </Space>
      <Drawer
        placement={placement}
        // destroyOnClose
        title={'标题'}
        visible={visible}
        onCancel={() => {
          console.log('zz cancel');
          setVisible(false);
        }}
      >
        <Input />
      </Drawer>
      {/*<div style={{ height: 1920 }}></div>*/}
    </Space>
  );
}
