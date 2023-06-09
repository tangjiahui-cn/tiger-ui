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
import { CloseFill, CloseOutline, Icon } from '../../packages/Icon';
import { DirectionType } from '../../packages/Drawer';
import { ButtonType } from '../../packages/Button';

const types: any[] = ['success', 'error', 'warn', 'info'];
const directions: DirectionType[] = ['top', 'left', 'right', 'bottom'];
const buttonType: ButtonType[] = ['primary', 'dashed', 'default', 'text', 'dotted'];
function App() {
  const [current, setCurrent] = useState<any>(undefined);
  const [options, setOptions] = useState<Option[]>([
    { label: '选项一', value: '1' },
    { label: '选项二', value: '2' },
    { label: '选项三', value: '3' },
    { label: '选项四', value: '4' },
  ]);

  const [loading, setLoading] = useState<boolean>(false);
  const [direction, setDirection] = useState<DirectionType>('right');
  const [drawVisible, setDrawerVisible] = useState<boolean>(false);
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);

  return (
    <ConfigProvider locale={en_US}>
      <div style={{ padding: 16, gap: 16, display: 'flex', flexDirection: 'column' }}>
        <CloseFill pointer />
        <CloseFill color={'red'} fontSize={18} spin />
        <Space>
          {buttonType.map((type) => {
            return (
              <Button
                type={type}
                key={type}
                loading={loading}
                onClick={() => {
                  console.log('click btn.');
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                  }, 2000);
                }}
              >
                点击加载：{type}
              </Button>
            );
          })}
        </Space>
        <Space>
          {buttonType.map((type) => {
            return (
              <Button danger type={type} key={type} loading>
                {type}
              </Button>
            );
          })}
        </Space>
        <Space>
          {buttonType.map((type) => {
            return (
              <Button disabled type={type} key={type} loading>
                {type}
              </Button>
            );
          })}
        </Space>
        <Space>
          {buttonType.map((type) => {
            return (
              <Button danger disabled type={type} key={type} loading>
                {type}
              </Button>
            );
          })}
        </Space>
        <Space>
          {types.map((type) => {
            return <Alert type={type} key={type} message={type} showIcon />;
          })}
        </Space>
        <Space block>
          {[...types, 'warning', 'loading'].map((type) => {
            return (
              <Button
                key={'type'}
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
        <Space block>
          {directions.map((direction) => {
            return (
              <Button
                onClick={() => {
                  setDirection(direction);
                  setDrawerVisible(true);
                }}
              >
                drawer（{direction}）
              </Button>
            );
          })}
          <Button onClick={() => setDialogVisible(true)}>打开Dialog</Button>
        </Space>
      </div>

      <Drawer
        visible={drawVisible}
        direction={direction}
        onCancel={() => setDrawerVisible(false)}
        onOk={() => setDrawerVisible(false)}
      >
        <Select options={options} />
      </Drawer>

      <Dialog
        visible={dialogVisible}
        onCancel={() => setDialogVisible(false)}
        onOk={() => setDialogVisible(false)}
      >
        <Select options={options} />
      </Dialog>
    </ConfigProvider>
  );
}

const dom = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(dom).render(<App />);
