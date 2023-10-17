---
nav: 组件
---

## 一、基本使用
```jsx
import {Select} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [key, setKey] = useState<string | undefined>(undefined);
  return (
    <Select
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

## 二、是否块级
```jsx
import {Select} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [key, setKey] = useState<string | undefined>(undefined);
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
  const [key, setKey] = useState<string | undefined>(undefined);
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

## API
<API id="Select"></API>
