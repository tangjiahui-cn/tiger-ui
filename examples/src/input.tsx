import React from 'react';
import { Input, Space } from '../../packages';

export default function () {
  return (
    <Space style={{ padding: 16 }} block direction={'vertical'}>
      一、基本使用
      <Input />
      二、大小
      <Space>
        <Input size={'large'} />
        <Input size={'middle'} />
        <Input size={'small'} />
      </Space>
      三、前缀与后缀
      <Space>
        <Input prefix={'prefix'} />
      </Space>
      <Space>
        <Input suffix={'suffix'}></Input>
      </Space>
      <Space>
        <Input prefix={'prefix'} suffix={'suffix'}></Input>
      </Space>
      四、禁用
      <Input disabled value={'111'} />
      <Input disabled prefix={'prefix'} suffix={'suffix'}></Input>
    </Space>
  );
}
