---
nav: 组件
title: 全局样式
order: 0
---

```jsx
import {Space, Button, ConfigProvider} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [primary, setPrimary] = useState(undefined);

  return <ConfigProvider
    theme={{
      primary
    }}
  >
    <Space direction={'vertical'}>
      <Space>
        <Button onClick={() => setPrimary('red')}>设置红色</Button>
        <Button onClick={() => setPrimary('blue')}>设置蓝色</Button>
        <Button onClick={() => setPrimary()}>恢复</Button>
      </Space>
      示例：
      <Button type={'primary'}>按钮</Button>
    </Space>
  </ConfigProvider>
}
```
