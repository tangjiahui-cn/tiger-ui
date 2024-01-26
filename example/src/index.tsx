import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Select, Space } from '@/.';
import Button from '@/Button';

function App() {
  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(true);
  const [value, setValue] = useState<string>('1');
  console.log('->', visible);
  return (
    <Space>
      {/*<Select style={{ width: 200 }} open={visible}>*/}
      {/*  {new Array(100).fill(0).map((_, index) => {*/}
      {/*    return <Select.Option key={`${index}`}>选项{index}</Select.Option>;*/}
      {/*  })}*/}
      {/*</Select>*/}
      <Select
        sign={'1'}
        allowClear
        style={{ width: 200 }}
        value={value}
        options={[
          { label: '选项一身份及哦啊吗束带结发马季手打批发买哇', value: '1' },
          { label: '选项二', value: '2' },
          { label: '选项三', value: '3' },
        ]}
        onChange={(value: any) => {
          console.log('->', value);
          setValue(value);
        }}
      />
      <Select
        sign={'2'}
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
    </Space>
  );
}

const dom = document.body;
ReactDOM.createRoot(dom).render(<App />);
