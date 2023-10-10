---
nav: 组件
---

## 基本使用
```jsx
import {Button, message} from 'tiger-ui';
import 'tiger-ui/index.css';

export default () => {
  return <Button onClick={() => message.success('message')}>message</Button>;
}
```

## API
