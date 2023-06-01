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

  return (
    <ConfigProvider locale={en_US}>
      <Space style={{ padding: 16 }} direction={'vertical'}>
        {types.map((type) => {
          return (
            <Alert
              style={{ width: 200 }}
              type={type}
              key={type}
              showIcon
              messageStyle={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
              descriptionStyle={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
              message={'这是一段消息提示'}
              description={'一个描述没有什么用处，手动阀省得麻烦骄傲我'}
              onClose={() => {
                console.log('关闭');
              }}
            />
          );
        })}
        {types.map((type) => {
          return <Alert type={type} key={type} closable showIcon />;
        })}
        {types.map((type: any) => {
          return (
            <Button
              key={type}
              onClick={() => {
                message.open({
                  type,
                  content: type,
                });
              }}
            >
              {type}
            </Button>
          );
        })}
      </Space>
    </ConfigProvider>
  );
}

const dom = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(dom).render(<App />);
