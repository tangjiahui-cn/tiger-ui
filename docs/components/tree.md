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

## 二、显示图标
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
      showIcon
      treeData={treeData}
    />
  );
}
```
## 三、默认展开
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
      showIcon
      defaultExpandedKeys={['1']}
      treeData={treeData}
    />
  );
}
```

## 四、支持多选
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
      showIcon
      multiple
      defaultExpandedKeys={['1', '2']}
      treeData={treeData}
    />
  );
}
```

## 五、虚拟列表
设置height属性，自动开启虚拟列表。

```tsx
import { Tree, Button, Space } from 'tiger-ui';
import { useState, useMemo, useEffect } from "react";

let keys: string[] = [];

function mockTreeData(count: number, level: number = 2, key = '') {
  let treeData: TreeNode[] = [];
  for (let i = 0; i < count; i++) {
    const nodeKey = `${key ? `${key}-` : ''}${i}`;
    keys.push(nodeKey);
    const children = level ? mockTreeData(count, level - 1, nodeKey) : [];
    treeData.push({
      key: nodeKey,
      title: nodeKey,
      children,
    });
  }
  return treeData;
}

const treeData = mockTreeData(10);
export default () => {
  const [height, setHeight] = useState<number>(350);
  const color = height ? 'green' : 'red';
  const name = height ? '开启' : '关闭';

  return (
    <Space direction={'vertical'} style={{width: '100%'}}>
      <Space>
        <Button type={'primary'} onClick={() => setHeight(height ? undefined : 350)}>
          {height ? '关闭虚拟列表' : '启用虚拟列表'}
        </Button>
        <span>
          当前状态：<span style={{color}}>{name}</span>
        </span>
      </Space>
      <div style={{ height: 350, overflowY: 'auto' }}>
        <Tree
          height={height}
          defaultExpandedKeys={keys}
          style={{ border: '1px solid #e8e8e8' }}
          treeData={treeData}
        />
      </div>
    </Space>
  )
}
```

## API
<API id="Tree"></API>
