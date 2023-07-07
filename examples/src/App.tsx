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
} from '../../packages';
import moment, { Moment } from 'moment';
import { useState } from 'react';
import { en_US, zh_CN } from '../../packages/_locales';

export default function () {
  const [locale, setLocale] = useState(zh_CN);
  const [time, setTime] = useState<Moment>(moment());

  return (
    <ConfigProvider locale={locale}>
      <Tabs
        options={[
          {
            key: '1',
            label: 'tab1',
            value: (
              <Space block wrap>
                <Button onClick={() => setLocale(zh_CN)}>中文</Button>
                <Button onClick={() => setLocale(en_US)}>English</Button>
                <DatePicker />
                <TimePicker
                  picker={'minute'}
                  value={time}
                  onChange={(mom, str) => {
                    setTime(mom);
                  }}
                />
                <TimePicker />
              </Space>
            ),
          },
          { key: '2', label: 'tab2', value: <div>222</div> },
        ]}
      />
    </ConfigProvider>
  );
}
