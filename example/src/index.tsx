import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Alert } from '../../packages';
import ConfigProvider from '../../packages/ConfigProvider/ConfigProvider';
import Space from '@/Space';
import { en_US, zh_CN, Locale } from '@/_locales';
import CheckBox from '@/CheckBox/checkbox';
import DatePicker from '@/DatePicker';

function App() {
  const [value, setValue] = useState(0);
  const [prefix, setPrefix] = useState('tiger-ui');
  const [locale, setLocale] = useState<null | Locale>(zh_CN);
  console.log('-->', React.version);

  return (
    <div>
      <DatePicker />
    </div>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
