---
title: Upload - 上传

nav: 组件

group:
  title: 交互组件
  order: 3
---

## 一、基本使用
```jsx
import {Upload} from 'tiger-ui';

export default () => {
  return <Upload
  
  />;
}
```
## 二、限制上传数量
```jsx
import {Upload} from 'tiger-ui';

export default () => {
  return <Upload
    maxCount={2}
  />;
}
```

## 三、限制上传大小
```jsx
import {Upload} from 'tiger-ui';

export default () => {
  return <Upload
    maxSize={1}
  />;
}
```
## API
<API id="Upload"></API>
