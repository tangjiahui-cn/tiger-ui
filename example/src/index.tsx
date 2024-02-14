import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ToolTip, Select } from '../../packages';
// import {Tooltip as ToolTip} from 'antd';
import 'antd/dist/antd.min.css';
import { Button } from '@/index';

function App() {
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState<any>('right');
  const [current, setCurrent] = useState<number>(0);
  const [list, setList] = useState<any[]>([]);

  return (
    <div
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 16,
      }}
    >
      <div>
        <Button onClick={() => setList([...list, list.length + 1])}>增加一项</Button>
      </div>

      {list.map((x) => (
        <div key={x}>
          <ToolTip title={x}>
            <span>{x}</span>
          </ToolTip>
        </div>
      ))}

      <Select style={{ width: 200 }}>
        <Select.Option key={'1'}>
          <span>11</span>
        </Select.Option>
        <Select.Option key={'2'}>
          <span>11</span>
        </Select.Option>
      </Select>

      <ToolTip title={'你好asdasdas'}>
        <Button>按 钮</Button>
      </ToolTip>
    </div>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
