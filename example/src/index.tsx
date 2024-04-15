import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Space from '@/Space';
import { Alert } from '../../packages';
import ConfigProvider from '@/ConfigProvider/ConfigProvider';

function App() {
  const [primary, setPrimary] = useState<string>();
  const [danger, setDanger] = useState<string>();

  return (
    <ConfigProvider
      theme={{
        primary,
        danger,
      }}
    >
      <Space>
        {['info', 'success', 'error', 'info'].map((type: any) => {
          return (
            <Alert
              showIcon
              closable
              message='This is a normal alert'
              type={type}
              key={type}
              description={'a description'}
            />
          );
        })}
      </Space>
    </ConfigProvider>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
