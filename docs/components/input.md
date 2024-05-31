---
title: Input - 输入框

nav: 组件

group:
  title: 交互组件
  order: 3
---

## 一、基本使用
```jsx
import {Input} from 'tiger-ui';

export default () => {
  return <Input />;
}
```

## 二、自定义占位符
```jsx
import {Input} from 'tiger-ui';

export default () => {
  return <Input placeholder={'一端自定义占位符'}/>;
}
```
## 三、最大输入长度
```jsx
import {Input} from 'tiger-ui';

export default () => {
  return <Input maxLength={10}/>;
}
```
## 四、自定义前后缀
```jsx
import {Input, Space} from 'tiger-ui';

export default () => {
  return <Space direction={'vertical'}>
    <Input maxLength={10} prefix={'prefix'}/>
    <Input maxLength={10} suffix={'suffix'}/>
    <Input maxLength={10} prefix={'prefix'} suffix={'suffix'}/>
  </Space>;
}
```
## 五、禁用状态
```jsx
import {Input, Space} from 'tiger-ui';

export default () => {
  return <Space direction={'vertical'} block>
    <Input disabled/>
    <Input maxLength={10} prefix={'prefix'} disabled/>
    <Input maxLength={10} suffix={'suffix'} disabled/>
    <Input maxLength={10} prefix={'prefix'} suffix={'suffix'} disabled/>
  </Space>;
}
```
## API
<API id="Input"></API>
