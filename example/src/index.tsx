/**
 * App
 */
import { useLogRenderTime } from '../hooks/useLogRenderTime';
import Button from '@/Button';
import { Input, Space, Drawer, Carousel } from '@/.';
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
      <div>
        <Carousel style={{ height: 180, width: '100%' }}>
          <Carousel.Item style={{ background: 'red', height: '100%' }}></Carousel.Item>
          <Carousel.Item style={{ background: 'blue', height: '100%' }}></Carousel.Item>
          <Carousel.Item style={{ background: 'black', height: '100%' }}></Carousel.Item>
        </Carousel>
      </div>
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
