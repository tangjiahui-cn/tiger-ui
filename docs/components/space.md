---
nav: 组件
---

## 一、基本使用
```jsx
import {Space, Button} from 'tiger-ui';

export default () => {
  return <Space>
    <Button>按钮</Button>
    <Button>按钮</Button>
    <Button>按钮</Button>
    <Button>按钮</Button>
  </Space>;
}
```

## 二、竖向排列
```jsx
import {Space, Button} from 'tiger-ui';

export default () => {
  return <Space direction={'vertical'}>
    <Button>按钮</Button>
    <Button>按钮</Button>
    <Button>按钮</Button>
    <Button>按钮</Button>
  </Space>;
}
```

## 三、间距（size）
```jsx
import {Space, Button} from 'tiger-ui';

export default () => {
  return <Space size={32}>
    <Button>按钮</Button>
    <Button>按钮</Button>
    <Button>按钮</Button>
    <Button>按钮</Button>
  </Space>;
}
```

## 四、自动换行（wrap）
```jsx
import {Space, Button} from 'tiger-ui';

export default () => {
  return <Space size={32} wrap>
    <Button>按钮</Button>
    <Button>按钮</Button>
    <Button>按钮</Button>
    <Button>按钮</Button>
    <Button>按钮</Button>
    <Button>按钮</Button>
    <Button>按钮</Button>
    <Button>按钮</Button>
    <Button>按钮</Button>
    <Button>按钮</Button>
    <Button>按钮</Button>
    <Button>按钮</Button>
  </Space>;
}
```

## API
<API id="Space"></API>
