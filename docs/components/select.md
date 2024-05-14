---
nav: 组件
---

## 一、基本使用
```jsx
import {Select, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [key, setKey] = useState(undefined);
  return (
    <Space>
      <Select
        value={key}
        onChange={setKey}
        options={[
          {label: '选项一', value: '1'},
          {label: '选项二', value: '2'},
          {label: '选项三', value: '3'},
        ]}
      />
    </Space>
  );
}
```

## 二、是否块级
```jsx
import {Select} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [key, setKey] = useState(undefined);
  return (
    <Select
      block
      value={key}
      onChange={setKey}
      options={[
        {label: '选项一', value: '1'},
        {label: '选项二', value: '2'},
        {label: '选项三', value: '3'},
      ]}
    />
  );
}
```

## 三、自定义占位符
```jsx
import {Select} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [key, setKey] = useState(undefined);
  return (
    <Select
      block
      value={key}
      placeholder={'一个自定义占位符'}
      onChange={setKey}
      options={[
        {label: '选项一', value: '1'},
        {label: '选项二', value: '2'},
        {label: '选项三', value: '3'},
      ]}
    />
  );
}
```

## 四、手动控制下拉显隐

```jsx
import { Select, Button, Space } from 'tiger-ui';
import { useState } from 'react';

export default () => {
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState(undefined);
  return (
    <Space>
      <Select
        style={{width: 220}}
        open={visible}
        value={key}
        placeholder={'一个自定义占位符'}
        onChange={setKey}
        options={[
          {label: '选项一', value: '1'},
          {label: '选项二', value: '2'},
          {label: '选项三', value: '3'},
        ]}
        // onDropdownVisibleChange={setVisible}
      />
      <Button type={'primary'} onClick={() => setVisible(true)}>显示</Button>
      <Button type={'primary'} onClick={() => setVisible(false)}>隐藏</Button>
    </Space>
  );
}
```

## API
<API id="Select"></API>
