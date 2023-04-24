import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Button, Input } from 'tiger-ui';
import { Button, Input } from '../../packages';
// import { Button, Input } from '../../lib/index';
// import '../../lib/index.css';

function App() {
  return (
    <div>
      <div>
        <Button type={'primary'} size={'large'}>
          按 钮
        </Button>
        <Button type={'default'} size={'large'}>
          按 钮
        </Button>
        <Button type={'dashed'} size={'large'}>
          按钮
        </Button>
        <Button type={'dotted'} size={'large'}>
          按钮
        </Button>
        <Button type={'text'} size={'large'}>
          按钮
        </Button>
      </div>

      <div style={{ marginTop: 8 }}>
        <Button type={'primary'} size={'middle'}>
          按 钮
        </Button>
        <Button type={'default'} size={'middle'}>
          按 钮
        </Button>
        <Button type={'dashed'} size={'middle'}>
          按钮
        </Button>
        <Button type={'dotted'} size={'middle'}>
          按钮
        </Button>
        <Button type={'text'} size={'middle'}>
          按钮
        </Button>
      </div>

      <div style={{ marginTop: 8 }}>
        <Button type={'primary'} size={'small'}>
          按钮
        </Button>
        <Button type={'default'} size={'small'}>
          按钮
        </Button>
        <Button type={'dashed'} size={'small'}>
          按钮
        </Button>
        <Button type={'dotted'} size={'small'}>
          按钮
        </Button>
        <Button type={'text'} size={'small'}>
          按钮
        </Button>
      </div>
    </div>
  );
}

const dom = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(dom).render(<App />);
