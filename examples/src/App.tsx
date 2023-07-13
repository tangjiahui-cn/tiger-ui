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
  Carousel,
} from '../../packages';
import { useState } from 'react';
import { en_US, zh_CN } from '../../packages/_locales';

export default function () {
  const [locale, setLocale] = useState(zh_CN);

  const [current, setCurrent] = useState<number>(0);
  return (
    <ConfigProvider locale={locale}>
      <Space style={{ height: '100%' }} direction={'vertical'} block>
        <Space block style={{ padding: 16 }}>
          受控切换：
          {[0, 1, 2, 3].map((x) => {
            return (
              <Button key={x} onClick={() => setCurrent(x)} focus={x === current}>
                {x}
              </Button>
            );
          })}
        </Space>
        <Tabs
          // destroy
          defaultActiveKey={'1'}
          destroy={false}
          options={[
            {
              key: '1',
              label: 'carousel',
              value: <RenderCarousel current={current} setCurrent={setCurrent} />,
            },
            { key: '2', label: 'collapse', value: <RenderCollapse /> },
          ]}
        />
      </Space>
    </ConfigProvider>
  );
}

function RenderCarousel({ current, setCurrent }: any) {
  const getStyle = (backgroundColor: React.CSSProperties['color']): React.CSSProperties => ({
    backgroundColor,
    color: backgroundColor === 'white' ? 'black' : 'white',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const _options: any[] = [
    { key: '1', children: <div style={getStyle('whitesmoke')}>AAAAA</div> },
    { key: '2', children: <div style={getStyle('red')}>BBBBB</div> },
    { key: '3', children: <div style={getStyle('green')}>CCCCC</div> },
    { key: '4', children: <div style={getStyle('blue')}>DDDDD</div> },
  ];
  const [options, setOptions] = useState<any[]>(_options);

  return (
    <Space style={{ height: '100%' }} direction={'vertical'} block>
      <Carousel
        autoplay
        // delay={5000}
        current={current}
        style={{
          height: 300,
          width: '100%',
        }}
        options={_options}
        onChange={setCurrent}
      />
    </Space>
  );
}

function RenderCollapse() {
  const [value, setValue] = useState<string[]>(['2']);
  return (
    <Collapse
      destroy={false}
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
  );
}
