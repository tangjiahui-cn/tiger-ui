import React from 'react';
import { Button, Space } from '../../packages';

let id = 0;
const getKey = () => `${id++}`;

export default function () {
  return (
    <Space style={{ width: '100%', padding: 16 }} direction={'vertical'}>
      一、大小（size）
      <Space>
        <Button size={'large'}>按钮</Button>
        <Button size={'middle'}>按钮</Button>
        <Button size={'small'}>按钮</Button>
      </Space>
      二、类型（type）
      <Space>
        <Button type={'default'}>按钮</Button>
        <Button type={'primary'}>按钮</Button>
        <Button type={'dashed'}>按钮</Button>
        <Button type={'dotted'}>按钮</Button>
        <Button type={'text'}>按钮</Button>
      </Space>
      三、危险按钮
      <Space>
        <Button type={'default'} danger>
          按钮
        </Button>
        <Button type={'primary'} danger>
          按钮
        </Button>
        <Button type={'dashed'} danger>
          按钮
        </Button>
        <Button type={'dotted'} danger>
          按钮
        </Button>
        <Button type={'text'} danger>
          按钮
        </Button>
      </Space>
      四、禁用状态
      {['large', 'middle', 'small'].map((size: any) => {
        return (
          <Space>
            <Button type={'default'} disabled size={size} key={getKey()}>
              按钮
            </Button>
            <Button type={'primary'} disabled size={size} key={getKey()}>
              按钮
            </Button>
            <Button type={'dashed'} disabled size={size} key={getKey()}>
              按钮
            </Button>
            <Button type={'dotted'} disabled size={size} key={getKey()}>
              按钮
            </Button>
            <Button type={'text'} disabled size={size} key={getKey()}>
              按钮
            </Button>
            <Button type={'default'} danger disabled size={size} key={getKey()}>
              按钮
            </Button>
            <Button type={'primary'} danger disabled size={size} key={getKey()}>
              按钮
            </Button>
            <Button type={'dashed'} danger disabled size={size} key={getKey()}>
              按钮
            </Button>
            <Button type={'dotted'} danger disabled size={size} key={getKey()}>
              按钮
            </Button>
            <Button type={'text'} danger disabled size={size} key={getKey()}>
              按钮
            </Button>
          </Space>
        );
      })}
      五、stayFocus(点击时聚焦)
      <Space>
        <Button stayFocus>按钮</Button>
        <Button stayFocus danger>
          按钮
        </Button>
      </Space>
      六、focus (受控性聚焦)
      <Space>
        <Button focus>按钮</Button>
        <Button focus danger>
          按钮
        </Button>
      </Space>
    </Space>
  );
}
