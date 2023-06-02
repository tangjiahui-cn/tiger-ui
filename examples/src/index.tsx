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
      <div style={{ padding: 16 }}>
        <Image
          preview
          // width={200}
          // height={200}
          src={
            'https://ts1.cn.mm.bing.net/th?id=OIP-C.85Y7QDuk39Ct6ShTKKEmggHaLH&w=120&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
          }
        />
      </div>
    </ConfigProvider>
  );
}

const dom = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(dom).render(<App />);
