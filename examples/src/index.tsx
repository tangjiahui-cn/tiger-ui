import React from "react";
import ReactDOM from 'react-dom/client';
import {Button} from '../../packages';
// import {Button} from '../../lib/index';
// import '../../lib/index.css';

function App () {
  return <div>
    <Button />
  </div>
}

const dom = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(dom).render(<App />)
