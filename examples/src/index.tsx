import React from "react";
import ReactDOM from 'react-dom/client';
import {Button, Input} from 'tiger-ui';
// import {Button, Input} from '../../lib/index';
// import '../../lib/index.css';

function App () {
  return <div>
    <Button />
    <Input />
  </div>
}

const dom = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(dom).render(<App />)
