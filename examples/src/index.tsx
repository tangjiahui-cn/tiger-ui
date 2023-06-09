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
  Tag,
  Radio,
} from '../../packages';
import { Option } from '../../packages/Select';
import { en_US } from '../../packages/_locales';
import moment from 'moment';
import { CloseOutLine, Icon } from '../../packages/Icon';

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

  const [value, setValue] = useState<boolean>(false);

  return (
    <ConfigProvider locale={en_US}>
      <Icon iconName={'ArrowDownOutline'} />
      <Icon iconName={'ArrowTopOutline'} />
      <Icon iconName={'ArrowRightOutline'} />
      <Icon iconName={'ArrowRightDoubleOutline'} />
      <Icon iconName={'ArrowLeftDoubleOutline'} />
      <Icon iconName={'ArrowLeftOutline'} />
      <Space wrap style={{ padding: 16 }}>
        <CloseOutLine />
        <Button>按钮</Button>
        <Radio
          defaultChecked={value}
          onChange={(checked) => {
            // setValue(checked);
          }}
        >
          11
        </Radio>
      </Space>
    </ConfigProvider>
  );
}

const dom = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(dom).render(<App />);
