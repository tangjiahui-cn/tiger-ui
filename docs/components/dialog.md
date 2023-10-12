---
nav: 组件
---

## 一、基本使用

```jsx
import {Button, Dialog, message, Input} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [visible, setVisible] = useState(false);
  return <>
    <Button onClick={() => setVisible(true)}>打开弹窗</Button>

    <Dialog
      visible={visible}
      onCancel={() => setVisible(false)}
      onOk={() => message.success('请求成功')}
    >
      <Input />
    </Dialog>
  </>;
}
```
## 二、隐藏遮罩层

```jsx
import {Button, Dialog, message} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [visible, setVisible] = useState(false);
  return <>
    <Button onClick={() => setVisible(true)}>打开弹窗</Button>

    <Dialog
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
import {Button, Dialog, message} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [visible, setVisible] = useState(false);
  return <>
    <Button onClick={() => setVisible(true)}>打开弹窗</Button>

    <Dialog
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
import {Button, Dialog, message} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [visible, setVisible] = useState(false);
  return <>
    <Button onClick={() => setVisible(true)}>打开弹窗</Button>

    <Dialog
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
import {Button, Dialog, message} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [visible, setVisible] = useState(false);
  return <>
    <Button onClick={() => setVisible(true)}>打开弹窗</Button>

    <Dialog
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
## 六、关闭时销毁对话框
```jsx
import {Button, Dialog, message, Input} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [visible, setVisible] = useState(false);
  return <>
    <Button onClick={() => setVisible(true)}>打开弹窗</Button>

    <Dialog
      destroyOnClose
      visible={visible}
      onCancel={() => setVisible(false)}
      onOk={() => message.success('请求成功')}
    >
      <Input />
    </Dialog>
  </>;
}
```

## API
<API id="Dialog"></API>
