import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
// import { Button, Input } from 'tiger-ui';
import { Button, Input, message, Space, DialogBox } from '../../packages';
// import { Button, Input, message, Space, DialogBox } from '../../lib/index';
// import '../../lib/index.css';

function App() {
  const [inputValue, setInputValue] = useState<any>('fsdfasd');
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    // message.success('操作成功', 100000)
    // message.success('操作成功2', 1000)
    // message.info('11')
  }, []);

  return (
    <Space size={16} style={{ padding: 16 }}>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        打开对话框
      </Button>

      <DialogBox
        destroyOnClose
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
        onOk={() => {
          message.success('操作成功');
        }}
      >
        <div style={{ height: 100, background: 'whitesmoke' }}></div>
      </DialogBox>
    </Space>
  );
}

const dom = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(dom).render(<App />);
