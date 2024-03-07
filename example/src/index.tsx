import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { DatePicker, Input, Switch } from '../../packages';
import Space from '@/Space';
import TimePicker from '@/TimePicker';
import moment, { Moment } from 'moment';
import Select from '@/Select';

function App() {
  const [prefix, setPrefix] = useState<boolean>();
  const [suffix, setSuffix] = useState<boolean>();
  const [disabled, setDisabled] = useState<boolean>();

  return (
    <Space
      block
      style={{
        padding: 16,
      }}
      direction={'vertical'}
    >
      <Space>
        prefix：
        <Switch checked={prefix} onChange={setPrefix} />
      </Space>
      <Space>
        suffix：
        <Switch checked={suffix} onChange={setSuffix} />
      </Space>
      <Space>
        disabled：
        <Switch checked={disabled} onChange={setDisabled} />
      </Space>
      <Space block>
        {['small', 'middle', 'large'].map((size: any) => {
          return (
            <Input
              key={size}
              size={size}
              suffix={suffix ? '11' : undefined}
              prefix={prefix ? '22' : undefined}
              disabled={disabled}
            />
          );
        })}
      </Space>
      <Space>
        <Input disabled />
        <Input maxLength={10} prefix={'prefix'} disabled />
        <Input maxLength={10} suffix={'suffix'} disabled />
        <Input maxLength={10} prefix={'prefix'} suffix={'suffix'} disabled />
      </Space>
    </Space>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
