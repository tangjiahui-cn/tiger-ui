---
title: Slider - 滚动条

nav: 组件

group:
  title: 交互组件
  order: 3
---

## 一、基本使用
```jsx
import {Slider} from 'tiger-ui';

export default () => {
  return <Slider />;
}
```

## 二、受控值

```jsx
import {Slider, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [value, setValue] = useState(20);
  return <Space block direction={'vertical'}>
    <Slider value={value}/>
    <Slider value={value} onChange={setValue} />
  </Space>;
}
```

## 三、平滑移动
```jsx
import {Slider} from 'tiger-ui';

export default () => {
  return <Slider smooth defaultValue={50}/>;
}
```

## API
<API id="Slider"></API>
