import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from '../dist/index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <Button>你好</Button>
    </div>
  </React.StrictMode>,
)
