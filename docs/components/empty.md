---
title: Empty - 空图标

nav: 组件

group:
  title: 展示组件
  order: 2
---

## 一、基本使用
```jsx
import {Empty} from 'tiger-ui';

export default () => {
  return <Empty />;
}
```

## 二、显示边框
```jsx
import {Empty} from 'tiger-ui';

export default () => {
  return <Empty bordered/>;
}
```

## 三、自定义内容文字
```jsx
import {Empty} from 'tiger-ui';

export default () => {
  return <Empty message={'一段测试用的消息内容'}/>;
}
```

## 四、可选类型 (fill)
```jsx
import {Empty} from 'tiger-ui';

export default () => {
  return <Empty type='fill' message={'一段测试用的消息内容'}/>;
}
```

## API
<API id="Empty"></API>
