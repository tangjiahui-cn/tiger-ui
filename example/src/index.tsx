/**
 * App
 */
import { useLogRenderTime } from '../hooks/useLogRenderTime';
import Button from '@/Button';
import { Input, Space, Dialog } from '@/index';
import { useState } from 'react';

export default function () {
  useLogRenderTime();

  const [visible, setVisible] = useState(true);

  return (
    <Space
      style={{
        padding: 12,
        width: '100%',
        boxSizing: 'border-box',
      }}
      direction={'vertical'}
    >
      <Button onClick={() => setVisible(true)}>打开弹窗</Button>

      <div style={{ float: 'right' }}>
        <Button onClick={() => setVisible(true)}>打开弹窗</Button>
      </div>

      <div>
        <Button onClick={() => setVisible(true)}>打开弹窗</Button>
      </div>
      <Dialog
        destroyOnClose
        title={'标题'}
        visible={visible}
        onCancel={() => {
          console.log('zz cancel');
          setVisible(false);
        }}
      >
        <Input />
      </Dialog>
      {/*<div style={{ height: 1920 }}></div>*/}
    </Space>
  );
}
