---
title: Table - 列表

nav: 组件

group:
  title: 展示组件
  order: 2
---

## 一、基本使用
```jsx
import {Table} from 'tiger-ui';

export default () => {
  return <Table
    dataSource={[
      {key: '1', name: '唐某人', sex: '男', age: 23},
      {key: '2', name: '唐某人', sex: '男', age: 23},
      {key: '3', name: '唐某人', sex: '男', age: 23},
    ]}
    columns={[
      {dataIndex: 'name', title: '姓名'},
      {dataIndex: 'sex', title: '性别'},
      {dataIndex: 'age', title: '年龄'},
    ]}
  />;
}
```

## 二、显示边框
```jsx
import {Table} from 'tiger-ui';

export default () => {
  return <Table
    bordered
    dataSource={[
      {key: '1', name: '唐某人', sex: '男', age: 23},
      {key: '2', name: '唐某人', sex: '男', age: 23},
      {key: '3', name: '唐某人', sex: '男', age: 23},
    ]}
    columns={[
      {dataIndex: 'name', title: '姓名'},
      {dataIndex: 'sex', title: '性别'},
      {dataIndex: 'age', title: '年龄'},
    ]}
  />;
}
```

## API
<API id="Table"></API>
