import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import ToolTip from '@/ToolTip/ToolTip';
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
      {/*{list.map((x) => (*/}
      {/*  <div key={x}>{x}</div>*/}
      {/*))}*/}
      {/*<div>*/}
      {/*  <Button onClick={() => setList([...list, list.length + 1])}>增加一项</Button>*/}
      {/*</div>*/}
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <ToolTip title={'你好asdasdas'}>
        <span style={{ background: 'whitesmoke' }}>鼠标移上去鼠标移上去鼠标移上去鼠标移上去</span>
      </ToolTip>
    </div>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
