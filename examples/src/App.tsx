import * as React from 'react';
import { Button, Notification, Space, Tree, TreeNode } from '../../packages';
import { useEffect, useState } from 'react';

export default function () {
  const [treeData, setTreeData] = useState<TreeNode[]>([
    { key: '1', title: '节点一' },
    {
      key: '2',
      title: '节点二',
      children: [
        { key: '1', title: '节点1-1' },
        { key: '2', title: '节点1-2' },
      ],
    },
    { key: '3', title: '节点三' },
  ]);

  function mockQuery() {
    setTimeout(() => {
      setTreeData([
        {
          key: '1',
          title: '层1',
          isExpand: true,
          children: [
            {
              key: '1-1',
              title: '层1-1',
            },
            {
              key: '2-2',
              title: '层1-1',
            },
          ],
        },
        {
          key: '2',
          title: '层2',
        },
        {
          key: '3',
          title: '层3',
          isLeaf: false,
          children: [
            {
              key: '3-1',
              title: '层3-1',
            },
            {
              key: '3-2',
              title: '层3-1',
            },
          ],
        },
      ]);
    }, 100);
  }

  useEffect(() => {}, []);

  return (
    <Space block direction={'vertical'} style={{ padding: 16 }}>
      <Button onClick={() => mockQuery()} style={{ width: 200 }}>
        查询接口
      </Button>
      <Tree treeData={treeData} bordered onExpand={console.log} onSelect={console.log} />
    </Space>
  );
}
