import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Drawer, Button, Dialog, Space, Counter } from '@/index';
import { CounterRef } from '@/Counter';

function App() {
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState<any>('right');
  const [current, setCurrent] = useState<number>(0);

  const ref = useRef<CounterRef>(null);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 16,
      }}
    >
      <Space>
        <Button
          onClick={() => {
            ref.current?.replay?.();
          }}
        >
          重新播放
        </Button>
        <Counter start={0} end={10000} timeSplit={5} ref={ref} />
      </Space>
    </div>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
