import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
// import { Button, Input } from 'tiger-ui';
import { Button, Input, message, Space } from '../../packages';
// import { Button, Input, message, Space } from '../../lib/index';
// import '../../lib/index.css';

function App() {
  const [inputValue, setInputValue] = useState<any>('fsdfasd');

  useEffect(() => {
    // message.success('操作成功', 2000)
    // message.success('操作成功2', 1000)
    // message.info('11')
  }, []);

  return (
    <Space size={16} style={{ padding: 16 }}>
      <Button
        onClick={() => {
          message.open({
            type: 'success',
            content: '11',
            duration: -10,
          });
        }}
      >
        open
      </Button>
      {['success', 'warn', 'warning', 'info', 'loading', 'error'].map((type: any) => {
        return (
          <Button
            key={type}
            onClick={() => {
              // @ts-ignore
              message.success('操作成功');
              // message['success']?.(type)
            }}
          >
            {type}
          </Button>
        );
      })}
    </Space>
  );
}

const dom = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(dom).render(<App />);
