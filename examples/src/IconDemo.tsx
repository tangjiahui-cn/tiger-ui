import React, { useEffect, useMemo, useState } from 'react';
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
  Empty,
} from '../../packages';
import { Option } from '../../packages/Select';
import { CloseFill, CloseOutline, Icon } from '../../packages/Icon';
import { DirectionType } from '../../packages/Drawer';
import { ButtonType } from '../../packages/Button';

import zh_CN from '../../packages/_locales/zh_CN';
import en_US from '../../packages/_locales/en_US';
import { Locale } from '../../packages/_locales';

const localeMap = {
  zh_CN,
  en_US,
};

type Language = keyof typeof localeMap;

const types: any[] = ['success', 'error', 'warn', 'info'];
const directions: DirectionType[] = ['top', 'left', 'right', 'bottom'];
const buttonType: ButtonType[] = ['primary', 'dashed', 'default', 'text', 'dotted'];
export default function () {
  const [language, setLanguage] = useState<Language>('zh_CN');
  const locale = useMemo<Locale>(() => localeMap[language], [language]);

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
    <ConfigProvider locale={locale}>
      <Space direction={'vertical'} style={{ padding: 16 }}>
        <Empty />
        <Empty
          message={'一段空提示语一段空提示语一段空提示语一段空提示语一段空提示语一段空提示语'}
          border
          type={'fill'}
        />
        <Space block>
          <Button onClick={() => setLanguage('zh_CN')}>中文</Button>
          <Button onClick={() => setLanguage('en_US')}>english</Button>
          {'->'}
          <Input style={{ width: 200 }} />
        </Space>
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
      </Space>

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
