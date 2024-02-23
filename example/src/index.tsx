import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ToolTip, Select } from '../../packages';
// import {Tooltip as ToolTip} from 'antd';
import { Button } from '@/index';
import Dialog from '@/Dialog';
// import { Modal } from 'antd';
import message from '@/Message';
import Input from '@/Input';

function App() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 16,
      }}
    >
      <Button onClick={() => setVisible(true)}>一个弹窗</Button>
      <Dialog
        open={visible}
        title={'一段标题'}
        confirmLoading={loading}
        onCancel={() => setVisible(false)}
        onOk={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setVisible(false);
            message.success('操作成功');
          }, 500);
        }}
      >
        <Input />
      </Dialog>
    </div>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
