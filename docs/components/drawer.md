---
nav: 组件
---

## 一、基本使用

```jsx
import {Button, Drawer, message, Input} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [visible, setVisible] = useState(false);
  return <>
    <Button onClick={() => setVisible(true)}>打开弹窗</Button>

    <Drawer
      direction={'left'}
      visible={visible}
      onCancel={() => setVisible(false)}
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
  const [visible, setVisible] = useState(false);
  return <>
    <Button onClick={() => setVisible(true)}>打开弹窗</Button>

    <Drawer
      mask={false}
      visible={visible}
      onCancel={() => setVisible(false)}
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
  const [visible, setVisible] = useState(false);
  return <>
    <Button onClick={() => setVisible(true)}>打开弹窗</Button>

    <Drawer
      maskClosable={false}
      visible={visible}
      onCancel={() => setVisible(false)}
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
  const [visible, setVisible] = useState(false);
  return <>
    <Button onClick={() => setVisible(true)}>打开弹窗</Button>

    <Drawer
      closeIcon={'关闭'}
      visible={visible}
      onCancel={() => setVisible(false)}
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
  const [visible, setVisible] = useState(false);
  return <>
    <Button onClick={() => setVisible(true)}>打开弹窗</Button>

    <Drawer
      closeIcon={'关闭'}
      visible={visible}
      onCancel={() => setVisible(false)}
      onOk={() => message.success('请求成功')}
      okText={<Button type={'primary'}>保存</Button>}
      cancelText={<Button>关闭</Button>}
    />
  </>;
}
```
## 六、弹窗方向
```jsx
import {Button, Drawer, message, Input, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [direction, setDirection] = useState('right');
  const [visible, setVisible] = useState(false);
  return <>
    <Space>
      {
        ['left', 'right', 'top', 'bottom'].map(direction => {
          return <Button key={direction} onClick={() => {
            setDirection(direction);
            setVisible(true);
          }}>{direction}</Button>
        })
      }
    </Space>

    <Drawer
      destroyOnClose
      direction={direction}
      visible={visible}
      onCancel={() => setVisible(false)}
      onOk={() => message.success('请求成功')}
    >
      <Input />
    </Drawer>
  </>;
}
```
## 七、关闭时销毁对话框
```jsx
import {Button, Drawer, message, Input} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [visible, setVisible] = useState(false);
  return <>
    <Button onClick={() => setVisible(true)}>打开弹窗</Button>

    <Drawer
      destroyOnClose
      visible={visible}
      onCancel={() => setVisible(false)}
      onOk={() => message.success('请求成功')}
    >
      <Input />
    </Drawer>
  </>;
}
```

## API
<API id="Drawer"></API>
