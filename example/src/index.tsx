import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Space from '@/Space';
import { Button } from '../../packages';
import ConfigProvider from '@/ConfigProvider/ConfigProvider';

function App() {
  const [primary, setPrimary] = useState<string>();
  const [danger, setDanger] = useState<string>();

  return (
    <ConfigProvider
      theme={{
        primary,
        danger,
      }}
    >
      <Space
        block
        style={{
          padding: 16,
        }}
        direction={'vertical'}
      >
        <Button block>block</Button>
        default + focus
        <Space>
          {['large', 'default', 'small'].map((size: any) => {
            return (
              <Button focus key={size} size={size}>
                {size}
              </Button>
            );
          })}
          {['primary', 'default', 'dashed', 'dotted', 'text'].map((type: any) => {
            return (
              <Button focus key={type} type={type}>
                {type}
              </Button>
            );
          })}
        </Space>
        danger + focus
        <Space>
          {['large', 'default', 'small'].map((size: any) => {
            return (
              <Button focus key={size} size={size} danger>
                {size}
              </Button>
            );
          })}
          {['primary', 'default', 'dashed', 'dotted', 'text'].map((type: any) => {
            return (
              <Button focus key={type} type={type} danger>
                {type}
              </Button>
            );
          })}
        </Space>
        <div>-----------</div>
        <Space>
          全局 primary
          <input type={'color'} onChange={(e) => setPrimary(e.target.value)} />
        </Space>
        <Space>
          全局 danger
          <input type={'color'} onChange={(e) => setDanger(e.target.value)} />
        </Space>
        <div>-----------</div>
        stayFocus
        <Space>
          {['large', 'default', 'small'].map((size: any) => {
            return (
              <Button stayFocus key={size} size={size}>
                {size}
              </Button>
            );
          })}
          {['primary', 'default', 'dashed', 'dotted', 'text'].map((type: any) => {
            return (
              <Button stayFocus key={type} type={type}>
                {type}
              </Button>
            );
          })}
        </Space>
        default + focus + disabled
        <Space>
          {['large', 'default', 'small'].map((size: any) => {
            return (
              <Button disabled focus key={size} size={size}>
                {size}
              </Button>
            );
          })}
          {['primary', 'default', 'dashed', 'dotted', 'text'].map((type: any) => {
            return (
              <Button disabled focus key={type} type={type}>
                {type}
              </Button>
            );
          })}
        </Space>
        danger + focus + disabled
        <Space>
          {['large', 'default', 'small'].map((size: any) => {
            return (
              <Button disabled focus key={size} size={size} danger>
                {size}
              </Button>
            );
          })}
          {['primary', 'default', 'dashed', 'dotted', 'text'].map((type: any) => {
            return (
              <Button disabled focus key={type} type={type} danger>
                {type}
              </Button>
            );
          })}
        </Space>
        <div>----------------</div>
        default
        <Space>
          {['large', 'default', 'small'].map((size: any) => {
            return (
              <Button key={size} size={size}>
                {size}
              </Button>
            );
          })}
          {['primary', 'default', 'dashed', 'dotted', 'text'].map((type: any) => {
            return (
              <Button key={type} type={type}>
                {type}
              </Button>
            );
          })}
        </Space>
        danger:
        <Space>
          {['large', 'default', 'small'].map((size: any) => {
            return (
              <Button key={size} size={size} danger>
                {size}
              </Button>
            );
          })}
          {['primary', 'default', 'dashed', 'dotted', 'text'].map((type: any) => {
            return (
              <Button key={type} type={type} danger>
                {type}
              </Button>
            );
          })}
        </Space>
        disabled:
        <Space>
          {['large', 'default', 'small'].map((size: any) => {
            return (
              <Button key={size} size={size} disabled>
                {size}
              </Button>
            );
          })}
          {['primary', 'default', 'dashed', 'dotted', 'text'].map((type: any) => {
            return (
              <Button key={type} type={type} disabled>
                {type}
              </Button>
            );
          })}
        </Space>
        danger + disabled:
        <Space>
          {['large', 'default', 'small'].map((size: any) => {
            return (
              <Button key={size} size={size} danger disabled>
                {size}
              </Button>
            );
          })}
          {['primary', 'default', 'dashed', 'dotted', 'text'].map((type: any) => {
            return (
              <Button key={type} type={type} danger disabled>
                {type}
              </Button>
            );
          })}
        </Space>
        {/*<ConfigProvider theme={{ color }}>*/}
        {/*  <div>*/}
        {/*    <Button>局域按钮（字体颜色）</Button>*/}
        {/*  </div>*/}
        {/*</ConfigProvider>*/}
        {/*<ConfigProvider theme={{ color: 'blue' }}>*/}
        {/*  <Button>局域按钮</Button>*/}
        {/*</ConfigProvider>*/}
        {/*<input type='color' onChange={(e) => setColor(e.target.value)} />*/}
      </Space>
    </ConfigProvider>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
