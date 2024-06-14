import React from 'react';
import ReactDOM from 'react-dom/client';
import '../packages/_theme/default.less';
import App from './src';

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
