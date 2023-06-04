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
  Alert,
  message,
  Slider,
  Image,
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

  const [visible, setVisible] = useState<boolean>(false);
  const [visible2, setVisible2] = useState<boolean>(false);

  const types: any[] = ['success', 'error', 'warn', 'info'];

  const [value, setValue] = useState<number>(30);

  return (
    <ConfigProvider locale={en_US}>
      <Space style={{ padding: 16 }} block>
        <Button>按钮</Button>
        <Button type={'default'}>按钮</Button>
        <Button type={'primary'}>按钮</Button>
        <Button type={'text'}>按钮</Button>
        <Button type={'dashed'}>按钮</Button>
      </Space>
      <Space style={{ padding: 16 }} block>
        <Button danger>按钮</Button>
        <Button danger type={'default'}>
          按钮
        </Button>
        <Button danger type={'primary'}>
          按钮
        </Button>
        <Button danger type={'text'}>
          按钮
        </Button>
        <Button danger type={'dashed'}>
          按钮
        </Button>
      </Space>
    </ConfigProvider>
  );
}

const dom = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(dom).render(<App />);
