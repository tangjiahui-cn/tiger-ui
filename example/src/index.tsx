import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Select, Space, Button } from '@/.';
import MyCom from './MyCom';

function App() {
  const [visible2, setVisible2] = useState(false);
  const [value, setValue] = useState<string>('1');

  return (
    <Space block direction={'vertical'}>
      <Space>
        {['primary', 'dashed', 'text', 'default'].map((type: any) => {
          return (
            <Button key={type} type={type}>
              {type}
            </Button>
          );
        })}
      </Space>
      <Space>
        <Select
          allowClear
          style={{ width: 200 }}
          value={value}
          options={[
            { label: '选项一', value: '1' },
            { label: '选项二', value: '2' },
            { label: '选项三', value: '3' },
          ]}
          onChange={(value: any) => {
            console.log('->', value);
            setValue(value);
          }}
        />
        <Select
          open={visible2}
          style={{ width: 200 }}
          options={[
            { label: '选项一', value: '1' },
            { label: '选项二', value: '2' },
            { label: '选项三', value: '3' },
          ]}
          onDropdownVisibleChange={setVisible2}
        />
        <Button onClick={() => setVisible2(true)}>打开下拉框</Button>
        <Button onClick={() => setVisible2(false)}>关闭下拉框</Button>
      </Space>

      <Select
        style={{ width: 200 }}
        options={[
          { label: '选项一', value: '1' },
          { label: '选项二', value: '2' },
          { label: '选项三', value: '3' },
        ]}
      />
      <MyCom />
    </Space>
  );
}

const dom = document.body;
ReactDOM.createRoot(dom).render(<App />);
