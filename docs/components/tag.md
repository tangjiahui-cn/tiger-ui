---
nav: 组件
---

## 一、基本使用
```jsx
import {Tag} from 'tiger-ui';

export default () => {
  return <Tag>tag</Tag>;
}
```

## 二、标签类型（四种）
```jsx
import {Tag, Space} from 'tiger-ui';

export default () => {
  return <Space>
    {
      ['success', 'error', 'warn', 'info'].map(type => {
        return (
          <Tag
            key={type}
            type={type}
          >
            {type}
          </Tag>
        )
      })
    }
  </Space>;
}
```

## 三、隐藏边框
```jsx
import {Tag, Space} from 'tiger-ui';

export default () => {
  return <Space>
    {
      ['success', 'error', 'warn', 'info'].map((type, index) => {
        return (
          <Tag
            bordered={false}
            key={type}
            type={type}
          >
            {type}
          </Tag>
        )
      })
    }
  </Space>;
}
```

## API
<API id="Tag"></API>
