---
title: CheckBox - 多选框

nav: 组件

group:
  title: 交互组件
  order: 3
---

## 一、基本使用
```jsx
import {CheckBox} from 'tiger-ui';

export default () => {
  return <CheckBox>选项</CheckBox>;
}
```
## 二、受控值
```jsx
import {CheckBox, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return <Space size={16}>
    <CheckBox checked={checked}>选项</CheckBox>
    <CheckBox checked={checked} onChange={setChecked}>选项</CheckBox>
  </Space>;
}
```

## 三、半选中值
半选中是受控属性。
```jsx
import {CheckBox, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  return <Space size={16}>
    <CheckBox indeterminate>选项</CheckBox>
  </Space>;
}
```

## 四、默认选中
```jsx
import {CheckBox, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  return <Space size={16}>
    <CheckBox defaultChecked>选项</CheckBox>
  </Space>;
}
```
## API
<API id="CheckBox"></API>
