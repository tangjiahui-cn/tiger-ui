import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Button, ConfigProvider, Drawer } from '../../packages';
import DropDown from '@/DropDown';
import Space from '@/Space';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>打开弹窗</Button>
      <ConfigProvider
        theme={{
          primary: 'red',
        }}
      >
        <Button type={'primary'}>afsdfds</Button>
      </ConfigProvider>
      <DropDown
        popupPanel={
          <Space direction={'vertical'}>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </Space>
        }
      >
        <Button>打开弹窗</Button>
      </DropDown>

      <Drawer open={visible} onCancel={() => setVisible(false)}>
        11
      </Drawer>
    </div>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
