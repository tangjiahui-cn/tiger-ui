import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ToolTip, Select } from '../../packages';
import { Select as SelectAntd } from 'antd';
// import {Tooltip as ToolTip} from 'antd';
import 'antd/dist/antd.min.css';
import { Button } from '@/index';

function App() {
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState<any>('right');
  const [current, setCurrent] = useState<number>(0);
  const [list, setList] = useState<any[]>(Array(10).fill(<div>10</div>));

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
          <span>{x}</span>
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

      <SelectAntd style={{ width: 200 }}>
        <SelectAntd.Option key={'1'}>
          <span>11</span>
        </SelectAntd.Option>
        <SelectAntd.Option key={'2'}>
          <span>11</span>
        </SelectAntd.Option>
      </SelectAntd>
      <div style={{ height: '150px', overflowY: 'auto', border: '1px solid #e8e8e8' }}>
        {list.map((x) => (
          <div key={x}>
            <span>{x}</span>
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

        <SelectAntd style={{ width: 200 }}>
          <SelectAntd.Option key={'1'}>
            <span>11</span>
          </SelectAntd.Option>
          <SelectAntd.Option key={'2'}>
            <span>11</span>
          </SelectAntd.Option>
        </SelectAntd>

        {list.map((x) => (
          <div key={x}>
            <span>{x}</span>
          </div>
        ))}
      </div>

      {list.map((x) => (
        <div key={x}>
          <span>{x}</span>
        </div>
      ))}

      <ToolTip title={'你好asdasdas'}>
        <Button>按 钮</Button>
      </ToolTip>
    </div>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
