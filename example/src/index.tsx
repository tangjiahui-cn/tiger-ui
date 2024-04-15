import React from 'react';
import ReactDOM from 'react-dom/client';
import { Carousel } from '../../packages';

function App() {
  return (
    <Carousel style={{ height: 180, width: 700 }}>
      <Carousel.Item style={{ background: 'red', height: '100%' }}>1</Carousel.Item>
      <Carousel.Item style={{ background: 'blue', height: '100%' }}>2</Carousel.Item>
      <Carousel.Item style={{ background: 'black', height: '100%' }}>3</Carousel.Item>
    </Carousel>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
