import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Alert } from '../../packages';
import ConfigProvider from '../../packages/ConfigProvider/ConfigProvider';
import Space from '@/Space';
import { en_US, zh_CN, Locale } from '@/_locales';
import CheckBox from '@/CheckBox/checkbox';

function App() {
  const [value, setValue] = useState(0);
  const [prefix, setPrefix] = useState('tiger-ui');
  const [locale, setLocale] = useState<null | Locale>(zh_CN);
  return (
    <div>
      <Space block>
        <CheckBox>选项一</CheckBox>
        <a onClick={() => setValue(value + 1)}>click me!</a>
        <a onClick={() => setPrefix('tiger-ui')}>前缀：tiger-ui</a>
        <a onClick={() => setPrefix('tiger-ui-2')}>前缀：tiger-ui-2</a>
        <a onClick={() => setLocale(zh_CN)}>locale: zh_CN</a>
        <a onClick={() => setLocale(en_US)}>locale: en_US</a>
        <a onClick={() => setLocale(null)}>locale: null</a>
      </Space>
      <ConfigProvider prefix={prefix} locale={locale || undefined}>
        <Button>局部</Button>
        <Alert message={'11'} />
      </ConfigProvider>
    </div>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
