import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Drawer, Button, Dialog, Space } from '@/index';

function App() {
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState<any>('right');
  const [current, setCurrent] = useState<number>(0);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Space>
        {['right', 'bottom', 'left', 'top'].map((direction) => {
          return (
            <Button
              key={direction}
              onClick={() => {
                setDirection(direction);
                setVisible(true);
              }}
            >
              {direction}
            </Button>
          );
        })}
      </Space>
      <Drawer
        direction={direction}
        title={'标题'}
        open={visible}
        onCancel={() => setVisible(false)}
      >
        一段文字
      </Drawer>
    </div>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
