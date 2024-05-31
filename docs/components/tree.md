---
title: Tree - 树

nav: 组件

group:
  title: 展示组件
  order: 2
---

## 一、基本使用
```jsx
import {Tree} from 'tiger-ui';

export default () => {
  const treeData = [
    {key: '1', title: '项目一',
      children: [
        {key: '1-1', title: '参建单位一'},
        {key: '1-2', title: '参建单位二'},
        {key: '1-3', title: '参建单位三'},
      ]
    },
    {key: '2', title: '项目二',
      children: [
        {key: '2-1', title: '参建单位一'},
        {key: '2-2', title: '参建单位二'},
        {key: '2-3', title: '参建单位三'},
      ]
    },
    {key: '3', title: '项目三',
      children: [
        {key: '3-1', title: '参建单位一'},
        {key: '3-2', title: '参建单位二'},
        {key: '3-3', title: '参建单位三'},
      ]
    },
  ]
  
  return (
    <Tree
      treeData={treeData}
      onExpand={console.log}
    />
  );
}
```

## 二、显示边框
```jsx
import {Tree} from 'tiger-ui';

export default () => {
  const treeData = [
    {key: '1', title: '项目一',
      children: [
        {key: '1-1', title: '参建单位一'},
        {key: '1-2', title: '参建单位二'},
        {key: '1-3', title: '参建单位三'},
      ]
    },
    {key: '2', title: '项目二',
      children: [
        {key: '2-1', title: '参建单位一'},
        {key: '2-2', title: '参建单位二'},
        {key: '2-3', title: '参建单位三'},
      ]
    },
    {key: '3', title: '项目三',
      children: [
        {key: '3-1', title: '参建单位一'},
        {key: '3-2', title: '参建单位二'},
        {key: '3-3', title: '参建单位三'},
      ]
    },
  ]
  
  return (
    <Tree
      bordered
      treeData={treeData}
    />
  );
}
```

## API
<API id="Tree"></API>
