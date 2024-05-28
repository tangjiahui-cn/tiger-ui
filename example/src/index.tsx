import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { ResultType } from '@/_types';
import Space from '@/Space';
import '../../packages/_theme/default.less';
import { useForceUpdate } from '@/_hooks';
import { Button, Alert } from '@/index';

const types: ResultType[] = [
  'success',
  // 'info', 'warning', 'error'
];
function App() {
  const ref = useRef<HTMLDivElement>(null);
  const update = useForceUpdate();
  const [message, setMessage] = React.useState('123');
  const [message2, setMessage2] = React.useState('description');

  useEffect(() => {
    console.log('zz -> ', ref.current);
  }, []);

  return (
    <Space size={16} style={{ padding: 12, boxSizing: 'border-box' }} direction={'vertical'} block>
      {/*<LoopText pauseOnHover={false}>111sidfpaisd</LoopText>*/}
      <Button onClick={update}>更新</Button>
      <input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <input
        value={message2}
        onChange={(e) => {
          setMessage2(e.target.value);
        }}
      />
      {types.map((type) => {
        return (
          <Alert
            ref={ref}
            key={type}
            type={type}
            description={message2}
            message={message}
            bordered={true}
            closable
            onClose={() => {
              console.log('close');
            }}
          />
        );
      })}
    </Space>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
