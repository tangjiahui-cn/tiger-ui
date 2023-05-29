import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  ConfigProvider,
  DatePicker,
  Select,
  Drawer,
  Dialog,
  Space,
  Input,
  Pagination,
  Button,
} from '../../packages';
import { Option } from '../../packages/Select';
import { en_US } from '../../packages/_locales';
import moment from 'moment';

function App() {
  const [current, setCurrent] = useState<any>(undefined);
  const [options, setOptions] = useState<Option[]>([
    { label: '选项一', value: '1' },
    { label: '选项二', value: '2' },
    { label: '选项三', value: '3' },
    { label: '选项四', value: '4' },
  ]);

  const [visible, setVisible] = useState<boolean>(true);
  const [visible2, setVisible2] = useState<boolean>(true);

  return (
    <ConfigProvider locale={en_US}>
      <Dialog
        visible={visible || visible2}
        onCancel={() => {
          setVisible(false);
          setVisible2(false);
        }}
      >
        {visible2 && <Input />}
        <Select options={options} value={current} onChange={setCurrent} />
        <DatePicker />
        <Pagination />
      </Dialog>

      <Space>
        <Button onClick={() => setVisible(true)}>open</Button>
        <Button onClick={() => setVisible2(true)}>open2</Button>
        <DatePicker
          value={moment()}
          onChange={(...args) => {
            console.log(...args);
          }}
        />
      </Space>
    </ConfigProvider>
  );
}

const dom = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(dom).render(<App />);
