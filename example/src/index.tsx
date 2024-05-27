import React from 'react';
import ReactDOM from 'react-dom/client';
import { default as Alert } from '@/Alert/component';
import { ResultType } from '@/_types';
import Space from '@/Space';
import '../../packages/_theme/default.less';
import { useForceUpdate } from '@/_hooks';
import { Button } from '@/index';

const types: ResultType[] = ['success', 'info', 'warning', 'error'];
function App() {
  const update = useForceUpdate();
  return (
    <Space size={16} style={{ padding: 12, boxSizing: 'border-box' }} direction={'vertical'} block>
      {/*<LoopText pauseOnHover={false}>111sidfpaisd</LoopText>*/}
      <Button onClick={update}>更新</Button>
      {types.map((type) => {
        return (
          <Alert
            loop
            key={type}
            type={type}
            description={'asdiasj'}
            message={`message is: ${type}`}
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
