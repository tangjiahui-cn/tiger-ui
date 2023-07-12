import * as React from 'react';
import {
  Space,
  ToolTip,
  Popover,
  TimePicker,
  DatePicker,
  Button,
  ConfigProvider,
  Tabs,
  InputNumber,
  Input,
} from '../../packages';
import { useState } from 'react';
import { en_US, zh_CN } from '../../packages/_locales';

export default function () {
  const [locale, setLocale] = useState(zh_CN);
  const [destroy, setDestroy] = useState<boolean>(false);

  const [value, setValue] = useState<number>(100);

  return (
    <ConfigProvider locale={locale}>
      <Space style={{ padding: 16 }}>
        <Button onClick={() => setDestroy(true)}>destroy</Button>
        <Button onClick={() => setDestroy(false)}>not destroy</Button>
        <span style={{ color: 'gray' }}>
          destroy：
          {destroy ? 'true（切换页面状态会丢失）' : 'false（状态保存）'}
        </span>
      </Space>
      <Tabs
        destroy={destroy}
        options={[
          {
            key: '1',
            label: 'tab1',
            value: (
              <Space block direction={'vertical'}>
                <Space block wrap>
                  <Button onClick={() => setLocale(zh_CN)}>中文</Button>
                  <Button onClick={() => setLocale(en_US)}>English</Button>
                </Space>
                <Space block direction={'vertical'}>
                  InputNumber (defaultValue: 11)：{' '}
                  <InputNumber style={{ width: 220 }} defaultValue={11} max={100} min={0} />
                  InputNumber (受控的value)：{' '}
                  <InputNumber style={{ width: 220 }} value={value} onChange={setValue} max={10} />
                  InputNumber (受控的value, 无onChange)：{' '}
                  <InputNumber style={{ width: 220 }} value={value} />
                  Input：
                  <Input style={{ width: 220 }} suffix={'suffix'} />
                </Space>
              </Space>
            ),
          },
          { key: '2', label: 'tab2', value: <div>222</div> },
        ]}
      />
    </ConfigProvider>
  );
}
