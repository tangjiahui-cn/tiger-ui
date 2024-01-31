import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Select, Dialog, Button } from '@/.';

function App() {
  const [visible, setVisible] = useState(true);
  const [value, setValue] = useState<string>('1');

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={() => setVisible(true)}>打开弹窗</Button>
        <Button onClick={() => setVisible(true)}>打开弹窗</Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={() => setVisible(true)}>打开弹窗</Button>
        <Button onClick={() => setVisible(true)}>打开弹窗</Button>
      </div>
      <Dialog
        title={'标题'}
        open={visible}
        onCancel={() => {
          setVisible(false);
        }}
      >
        Hello World
      </Dialog>
    </div>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
