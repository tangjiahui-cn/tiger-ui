import React from "react";
import ReactDOM from 'react-dom/client';
import {Button} from '../../packages';
// import '../../dist/index.css';
// import {Button} from '../../dist/index';

function App () {
  return <div>
    <Button />
  </div>
}

const dom = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(dom).render(<App />)
