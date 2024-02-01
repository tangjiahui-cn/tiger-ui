import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Select, Button, Space, Dialog, Carousel } from '@/index';

function App() {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<string>('1');
  const [current, setCurrent] = useState<number>(0);

  return (
    <div
      style={{
        width: '100%',
        height: 2100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ height: 180, width: '80%', display: 'flex', gap: 16 }}>
        <Carousel
          style={{ flex: 1 }}
          autoplay={false}
          current={current}
          onChange={(current) => {
            setCurrent(current);
          }}
        >
          <Carousel.Item style={{ background: 'red' }}>页面1</Carousel.Item>
          <Carousel.Item style={{ background: 'blue' }}>页面2</Carousel.Item>
          <Carousel.Item style={{ background: 'black' }}>页面3</Carousel.Item>
          <Carousel.Item style={{ background: 'yellow' }}>页面4</Carousel.Item>
        </Carousel>

        <Carousel
          style={{ flex: 1 }}
          autoplay={false}
          current={current}
          onChange={(current) => {
            setCurrent(current);
          }}
          items={[
            {
              key: '1',
              style: { background: 'red' },
              children: '页面1',
            },
            {
              key: '2',
              style: { background: 'blue' },
              children: '页面2',
            },
            {
              key: '3',
              style: { background: 'black' },
              children: '页面3',
            },
            {
              key: '4',
              style: { background: 'yellow' },
              children: '页面4',
            },
          ]}
        />

        <Space>
          <Select>
            <Select.Option key={'1'}>选项一</Select.Option>
            <Select.Option key={'2'}>选项二</Select.Option>
            <Select.Option key={'3'}>选项三</Select.Option>
          </Select>
          <Button
            onClick={() => {
              setVisible(true);
            }}
          >
            打开弹窗
          </Button>
        </Space>

        <Dialog title={'标题'} open={visible} onCancel={() => setVisible(false)}>
          一段文字
        </Dialog>
      </div>
    </div>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
