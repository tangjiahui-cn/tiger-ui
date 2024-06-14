/**
 * App
 */
import { TreeNode, Tree } from '@/.';
import { useLogRenderTime } from '../hooks/useLogRenderTime';

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

export default function () {
  useLogRenderTime();

  return (
    <div style={{ padding: 12 }}>
      <Tree
        height={350}
        defaultExpandedKeys={keys}
        style={{ border: '1px solid #e8e8e8', width: 400 }}
        treeData={treeData}
      />
    </div>
  );
}
