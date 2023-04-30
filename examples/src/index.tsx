import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
// import { Button, Input } from 'tiger-ui';
import { Button, Input, message } from '../../packages';
// import { Button, Input } from '../../lib/index';
// import '../../lib/index.css';

function App() {
  const [inputValue, setInputValue] = useState<any>('fsdfasd');

  useEffect(() => {
    // message.success('操作成功', 2000)
    // message.success('操作成功2', 1000)
  }, []);

  return (
    <div>
      <div>
        <Button size={'middle'} onClick={() => message.success('Hello', 1000)}>
          success
        </Button>
        <Button size={'middle'} onClick={() => message.error('Hello', 1000)}>
          error
        </Button>
        <Button size={'middle'} onClick={() => message.warn('Hello', 1000)}>
          warn
        </Button>
        <Button size={'middle'} onClick={() => message.warning('Hello', 1000)}>
          warning
        </Button>
        <Button size={'middle'} onClick={() => message.loading('Hello', 1000)}>
          loading
        </Button>
        <Button size={'middle'} onClick={() => message.info('Hello', 1000)}>
          info
        </Button>
        <Button
          size={'middle'}
          onClick={() =>
            message.open({
              type: 'none',
              message: 'Hello',
            })
          }
        >
          open
        </Button>
      </div>
    </div>
  );
}

const dom = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(dom).render(<App />);
