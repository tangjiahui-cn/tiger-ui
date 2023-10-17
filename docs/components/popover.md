---
nav: 组件
---

## 一、基本使用
```jsx
import {Popover} from 'tiger-ui';

export default () => {
  return <Popover content={'内容'}>
    <span>一段文字</span>
  </Popover>;
}
```

## 二、自定义标题和内容
```jsx
import {Popover} from 'tiger-ui';

export default () => {
  return <Popover title='标题' content={'内容'}>
    <span>一段文字</span>
  </Popover>;
}
```

## API
<API id="Popover"/>
