---
nav: 组件
---

## 基本使用
```jsx
import {Button, Notification} from 'tiger-ui';
import 'tiger-ui/index.css';

export default () => {
  return <Button onClick={() => {
    Notification.success({
      message: 'message'
    })
  }}>message</Button>;
}
```

## API
