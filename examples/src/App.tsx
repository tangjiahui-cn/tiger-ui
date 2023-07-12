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
  Collapse,
} from '../../packages';
import { useState } from 'react';
import { en_US, zh_CN } from '../../packages/_locales';

export default function () {
  const [locale, setLocale] = useState(zh_CN);
  const [destroy, setDestroy] = useState<boolean>(false);

  const [value, setValue] = useState<string[]>(['2']);

  return (
    <ConfigProvider locale={locale}>
      <Space style={{ padding: 16 }} direction={'vertical'} block>
        <Collapse
          // destroy
          accordion
          value={value}
          onChange={setValue}
          options={[
            {
              key: '1',
              icon: '（图标）',
              label: '标题一',
              children: (
                <Space>
                  <Input />
                  <InputNumber />
                </Space>
              ),
            },
            {
              key: '2',
              label: '标题二',
              children: (
                <div>
                  <div>真不错</div>
                  <div>哈哈</div>
                  <div>what</div>
                  <div>why</div>
                  <div>不应该</div>
                </div>
              ),
            },
            {
              key: '3',
              label: '刚刚好',
              children: false,
            },
          ]}
        />
      </Space>
    </ConfigProvider>
  );
}
