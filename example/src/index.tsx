import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Select, Space, Button, DropDown, Pagination } from '@/.';

function App() {
  const [visible, setVisible] = useState(true);
  const [value, setValue] = useState<string>('1');

  return (
    <Space block direction={'vertical'}>
      <Pagination total={110} />
      <Space>
        <Select style={{ width: 200 }}>
          <Select.Option key={'1'}>选项一</Select.Option>
          <Select.Option key={'2'}>选项二</Select.Option>
          <Select.Option key={'3'}>选项三</Select.Option>
        </Select>
        <DropDown
          popupPanel={
            <div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
            </div>
          }
          onOpenChange={(visible) => {
            console.log('visible --->', visible);
            // setVisible(visible);
          }}
        >
          <Button
            onPointerDown={() => {
              console.log('按钮点击');
            }}
          >
            一个下拉按钮组
          </Button>
        </DropDown>
      </Space>
    </Space>
  );
}

const dom = document.body;
ReactDOM.createRoot(dom).render(<App />);
