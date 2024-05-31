---
title: Space - 间距

nav: 组件

group:
  title: 布局组件
  order: 6
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
import {Space, Button, Slider} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [value, setValue] = useState(16);
  return <Space direction={'vertical'} block>
    <div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
      <Slider style={{flex: 1}} value={value} onChange={setValue}/>
      <span>
        {value}px
      </span>
    </div>
    <Space size={value}>
      <Button>按钮</Button>
      <Button>按钮</Button>
      <Button>按钮</Button>
      <Button>按钮</Button>
    </Space>
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
