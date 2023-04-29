import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import { Button, Input } from 'tiger-ui';
import { Button, Input } from '../../packages';
// import { Button, Input } from '../../lib/index';
// import '../../lib/index.css';

function App() {
  const [inputValue, setInputValue] = useState<any>('');
  return (
    <div>
      <div>
        你好中国
        <Button size={'middle'}>按钮</Button>
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Input
          prefix={'11'}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          suffix={'22'}
        />
      </div>
      <div>
        <Button size={'large'}>按钮</Button>
        <Input size={'large'} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Input
          prefix={'11'}
          size={'large'}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <Button size={'small'}>按钮</Button>
        <Input size={'small'} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Input
          prefix={'11'}
          size={'small'}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
}

const dom = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(dom).render(<App />);
