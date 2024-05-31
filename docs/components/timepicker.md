---
title: TimePicker - 时间选择器

nav: 组件

group:
  title: 交互组件
  order: 3
---

## 一、基本使用
```jsx
import {TimePicker} from 'tiger-ui';

export default () => {
  return <TimePicker />;
}
```

## 二、受控值

```jsx
import { TimePicker, Space } from 'tiger-ui';
import moment from 'moment';
import { useState } from "react";

export default () => {
  const [value, setValue] = useState (moment());
  return <Space direction={'vertical'}>
    <Space>
      可选择：
      <TimePicker value={value} onChange={setValue} />
    </Space>
    <Space>
      不可选择：
      <TimePicker value={moment()} />
    </Space>
  </Space>;
}
```

## 三、选择器类型

```jsx
import { TimePicker, Space, Select } from 'tiger-ui';
import moment from 'moment';
import { useState } from "react";

export default () => {
  const [type, setType] = useState  ('');

  return <Space>
    <TimePicker type={type} />
    <Select
      value={type}
      onChange={(type) => setType(type)}
      options={[
        { label: 'hour', value: 'hour' },
        { label: 'minute', value: 'minute' },
        { label: 'second', value: 'second' },
      ]}
    />
  </Space>;
}
```
## API
<API id="TimePicker"></API>
