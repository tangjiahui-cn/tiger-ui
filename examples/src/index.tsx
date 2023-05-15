import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider, DatePicker, Select, Drawer } from '../../packages';
import { Option } from '../../packages/Select';
import { en_US } from '../../packages/_locales';
import { Button } from '../../lib';
import moment from 'moment';

function App() {
  const [current, setCurrent] = useState<any>(undefined);
  const [options, setOptions] = useState<Option[]>([
    { label: '选项一', value: '1' },
    { label: '选项二', value: '2' },
    { label: '选项三', value: '3' },
    { label: '选项四', value: '4' },
  ]);

  return (
    <ConfigProvider locale={en_US}>
      <DatePicker
        value={moment()}
        onChange={(...args) => {
          console.log(...args);
        }}
      />
    </ConfigProvider>
  );
}

const dom = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(dom).render(<App />);
