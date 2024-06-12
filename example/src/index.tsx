import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Space from '@/Space';
import '../../packages/_theme/default.less';
import Button, { ButtonSize, ButtonType } from '@/Button/button';
import { Switch } from '@/index';
import { Tree, TreeNode, Checkbox } from '@/.';

const size: ButtonSize[] = ['large', 'middle', 'small'];
const types: ButtonType[] = ['primary', 'default', 'dashed', 'dotted', 'text'];

const ghost = false;
const disabled = false;

const treeData: TreeNode[] = [
  {
    key: '1',
    title: '项目一',
    children: [
      { key: '1-1', title: '子项目1' },
      { key: '1-2', title: '子项目2' },
      {
        key: '1-3',
        title: '子项目3',
        children: [
          { key: '1-3-1', title: '子项目1' },
          { key: '1-3-2', title: '子项目2' },
          { key: '1-3-3', title: '子项目3' },
        ],
      },
    ],
  },
  {
    key: '2',
    title: '项目二',
    children: [
      { key: '2-1', title: '子项目1' },
      { key: '2-2', title: '子项目2' },
      { key: '2-3', title: '子项目3' },
    ],
  },
  {
    key: '3',
    title: '项目三',
    children: [
      { key: '3-1', title: '子项目1' },
      { key: '3-2', title: '子项目2' },
      { key: '3-3', title: '子项目3' },
    ],
  },
];

function App() {
  const [visible, setVisible] = useState<any>(true);
  const [disabled, setDisabled] = useState<any>(false);
  const [expandedKeys, setExpandedKeys] = useState<string[]>(['1']);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['1']);

  const [loading, setLoading] = useState(false);

  return (
    <div style={{ height: '100%', background: 'whitesmoke' }}>
      <Space size={16} style={{ background: 'white', padding: 12 }} block direction={'vertical'}>
        <Space>
          <Switch
            style={{ width: 64 }}
            checked={disabled}
            onChange={setDisabled}
            checkedChildren={'禁用'}
            unCheckedChildren={'启用'}
          />
        </Space>
        <Space size={16}>
          <Checkbox disabled={disabled} checked={visible} onChange={setVisible}>
            选中
          </Checkbox>
          <Checkbox disabled={disabled} defaultChecked>
            默认选中
          </Checkbox>
          <Checkbox disabled={disabled}>多选框</Checkbox>
          <Checkbox disabled={disabled} indeterminate>
            indeterminate
          </Checkbox>
        </Space>
        {/*<Tree*/}
        {/*  showIcon*/}
        {/*  treeData={treeData}*/}
        {/*  expandedKeys={expandedKeys}*/}
        {/*  onExpand={setExpandedKeys}*/}
        {/*  // selectedKeys={selectedKeys}*/}
        {/*  // onSelect={setSelectedKeys}*/}
        {/*/>*/}
        {/*<div*/}
        {/*  style={{*/}
        {/*    height: 600,*/}
        {/*  }}*/}
        {/*/>*/}
      </Space>
    </div>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
