import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { TimePicker, Select } from '../../packages';
// import {Tooltip as ToolTip} from 'antd';
import { Button } from '@/index';
import Dialog from '@/Dialog';
// import { Modal } from 'antd';
import message from '@/Message';
import Input from '@/Input';
import moment from 'moment';
import Space from '@/Space';

function App() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<any>('');

  return (
    <Space
      style={{
        padding: 16,
      }}
    >
      <TimePicker type={type} />
      <Select
        value={type}
        onChange={(type) => setType(type)}
        options={[
          { label: 'hour', value: 'hour' },
          { label: 'minute', value: 'minute' },
          { label: 'second', value: 'second' },
        ]}
      />
    </Space>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
