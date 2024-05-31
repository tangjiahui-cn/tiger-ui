---
title: InputNumber - 数字输入框

nav: 组件

group:
  title: 交互组件
  order: 3
---

## 一、基本使用
```jsx
import {InputNumber} from 'tiger-ui';

export default () => {
  return <InputNumber />;
}
```

## 二、设置步进
```jsx
import {InputNumber} from 'tiger-ui';

export default () => {
  return <InputNumber step={10}/>;
}
```

## 三、设置数值范围
```jsx
import {InputNumber} from 'tiger-ui';

export default () => {
  return <InputNumber min={10} max={100} step={10}/>;
}
```
## 四、设置前缀
```jsx
import {InputNumber} from 'tiger-ui';

export default () => {
  return <InputNumber
    min={10}
    max={100}
    step={10}
    prefix={'prefix'}
  />;
}
```
## API
<API id="InputNumber"></API>
