---
title: Drawer - 抽屉

nav: 组件

group:
  title: 抽屉组件
  order: 5
---

## 一、基本使用

```jsx
import {Button, Drawer, message, Input} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(true)}>打开抽屉</Button>

    <Drawer
      title={'标题'}
      visible={open}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('请求成功')}
    >
      <Input />
    </Drawer>
  </>;
}
```
## 二、隐藏遮罩层

```jsx
import {Button, Drawer, message} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(true)}>打开抽屉</Button>

    <Drawer
      title={'标题'}
      mask={false}
      visible={open}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('请求成功')}
    />
  </>;
}
```

## 三、点击遮罩层不可关闭
```jsx
import {Button, Drawer, message} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(true)}>打开抽屉</Button>

    <Drawer
      title={'标题'}
      maskClosable={false}
      visible={open}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('请求成功')}
    />
  </>;
}
```

## 四、自定义右上角关闭按钮
```jsx
import {Button, Drawer, message} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(true)}>打开抽屉</Button>

    <Drawer
      title={'标题'}
      closeIcon={'关闭'}
      visible={open}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('请求成功')}
    />
  </>;
}
```
## 五、修改底部按钮
```jsx
import {Button, Drawer, message} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(true)}>打开抽屉</Button>

    <Drawer
      title={'标题'}
      visible={open}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('请求成功')}
      okText={'保存'}
      cancelText={'关闭'}
    />
  </>;
}
```
## 六、关闭时销毁对话框
```jsx
import {Button, Drawer, message, Input} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(true)}>打开抽屉</Button>

    <Drawer
      title={'标题'}
      destroyOnClose
      visible={open}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('请求成功')}
    >
      <Input />
    </Drawer>
  </>;
}
```

## 七、手动控制动画时长
```jsx
import {Space, Select, Button, Drawer, message, Input} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const DEFAULT = '300';
  const [delay, setDelay] = useState(DEFAULT);
  const [open, setOpen] = useState(false);
  
  return <>
    <Space>
      <Select
        value={delay}
        onChange={setDelay}
        style={{width: 150}}
      >
        {
          [
            100,
            200,
            300,
            400,
            500,
            600,
            700,
            800,
            900
          ].map(x => {
            return (
              <Select.Option key={x}>
                {x}ms{`${x}` === DEFAULT ? '（默认）' : ''}
              </Select.Option>
            )
          })
        }
      </Select>
      <Button onClick={() => setOpen(true)}>打开抽屉</Button>
    </Space>
    
    <Drawer
      title={'标题'}
      destroyOnClose
      visible={open}
      animationDuration={Number(delay)}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('请求成功')}
    >
      <Input />
    </Drawer>
  </>;
}
```

## 八、打开位置
设置placement属性，可选值为`top`、`right`、`bottom`、`left`。
```jsx
import {Space, Select, Button, Drawer, message, Input} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [placement, setPlacement] = useState('right');
  const [open, setOpen] = useState(false);
  
  return <>
    <Space>
      {
        [
          'top',
          'right',
          'bottom',
          'left',
        ].map(x => {
          return (
            <Button
              key={x}
              onClick={() => {
                setPlacement(x);
                setOpen(true);
              }}>{x}</Button>
          )
        })
      }
    </Space>
    
    <Drawer
      title={'标题'}
      visible={open}
      placement={placement}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('请求成功')}
    >
      <Input />
    </Drawer>
  </>;
}
```
## API
<API id="Drawer"></API>
