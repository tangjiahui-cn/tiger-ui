/**
 * App
 */
import { useLogRenderTime } from '../hooks/useLogRenderTime';
import Button from '@/Button';
import { Input, Space, Drawer, setTheme } from '@/.';
import { useState } from 'react';

export default function () {
  useLogRenderTime();

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<any>('top');

  function changePrimary(color: string) {
    setTheme('primary', color);
  }

  return (
    <Space
      style={{
        padding: 12,
        width: '100%',
        boxSizing: 'border-box',
      }}
      direction={'vertical'}
    >
      <Button
        type={'primary'}
        loading={loading}
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 500);
        }}
      >
        测试按钮
      </Button>
      <Button onClick={() => changePrimary('red')}>红色</Button>
      <Button onClick={() => changePrimary('blue')}>蓝色</Button>
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
