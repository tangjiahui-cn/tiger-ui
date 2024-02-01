---
nav: 组件
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
      open={open}
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
      mask={false}
      open={open}
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
      maskClosable={false}
      open={open}
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
      closeIcon={'关闭'}
      open={open}
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
      closeIcon={'关闭'}
      open={open}
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
      destroyOnClose
      open={open}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('请求成功')}
    >
      <Input />
    </Drawer>
  </>;
}
```

## 七、可以控制打开方向 （共4个）
```jsx
import {Button, Drawer, message, Space, Input} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [direction, setDirection] = useState('right')
  
  return <>
    <Space>
      {
        ['right', 'bottom', 'left', 'top'].map(direction => {
          return (
            <Button
              onClick={() => {
                setDirection(direction);
                setOpen(true)
              }}
            >{direction}</Button>
          )
        })
      }
    </Space>

    <Drawer
      title={'Hello Drawer'}
      direction={direction}
      open={open}
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
