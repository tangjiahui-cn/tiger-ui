import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Drawer } from '../../packages';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>打开弹窗</Button>
      <Button onClick={() => setVisible(true)}>打开弹窗</Button>

      <Drawer open={visible} onCancel={() => setVisible(false)}>
        11
      </Drawer>
    </div>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
