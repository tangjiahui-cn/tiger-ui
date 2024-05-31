---
title: Radio - 单选按钮

nav: 组件

group:
  title: 交互组件
  order: 3
---

## 一、基本使用
```jsx
import {Radio} from 'tiger-ui';

export default () => {
  return <Radio>男</Radio>;
}
```

## 二、受控值

```jsx
import {Radio, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Space>
      <Radio
        checked={false}
      >受控false</Radio>
      <Radio
        checked={checked}
        onChange={setChecked}
      >{checked ? 'true' : 'false'}</Radio>
    </Space>
  );
}
```

## API
<API id="Radio"></API>
