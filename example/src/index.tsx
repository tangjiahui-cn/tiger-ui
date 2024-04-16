import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Alert } from '../../packages';
import ConfigProvider from '../../packages/ConfigProvider/ConfigProvider';
import Space from '@/Space';
import { en_US, zh_CN, Locale } from '@/_locales';
import CheckBox from '@/CheckBox/checkbox';
import DatePicker from '@/DatePicker';
import Dialog from '@/Dialog/dialog';

function App() {
  const [visible, setVisible] = useState(false);
  const [prefix, setPrefix] = useState('tiger-ui');
  const [locale, setLocale] = useState<null | Locale>(zh_CN);
  console.log('-->', React.version);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>打开弹窗</Button>
      <Dialog
        open={visible}
        onCancel={() => {
          setVisible(false);
        }}
      >
        11
      </Dialog>
    </div>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
