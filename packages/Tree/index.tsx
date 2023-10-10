import React, { useEffect, useState } from 'react';
import styles from './index.less';
import classNames from 'classnames';
import { ArrowRightOutline } from '../Icon';
import { isBoolean } from '../_utils';

export type TreeNode = {
  key?: string;
  title?: React.ReactNode;
  isLeaf?: boolean; // 节点是否叶子节点（叶子节点不能展开，会强制isExpand为false）
  isExpand?: boolean; // 节点是否展开
  children?: TreeNode[];
};

export interface TreeProps {
  // 样式
  style?: React.CSSProperties;
  // 是否边框
  bordered?: boolean;
  // 设置树数据
  treeData?: TreeNode[];
  // todo: 受控的数据
  // selectedKeys?: string[];
  // expandedKeys?: string[];
  // 选中回调
  onSelect?: (node: TreeNode) => void;
  // 展开回调
  onExpand?: (node: TreeNode) => void;
}

export default function Tree(props: TreeProps) {
  const [data, setData] = useState<TreeNode[]>([]);

  function handleExpand(node: TreeNode, isExpand: boolean) {
    node.isExpand = !isExpand;
    setData([...data]);
    props?.onExpand?.(node);
  }

  useEffect(() => {
    setData(props?.treeData || []);
  }, [props?.treeData]);

  function renderTreeLine(node: TreeNode): React.ReactNode {
    let isExpand = isBoolean(node?.isExpand) ? node?.isExpand : false;
    const isLeaf = node?.children?.length ? false : isBoolean(node?.isLeaf) ? node?.isLeaf : true;

    return (
      <div
        key={node?.key}
        className={classNames(styles['tree-line'], !isExpand && styles['tree-line-hide-children'])}
      >
        <div className={styles['tree-line-head']}>
          <div className={styles['tree-line-head-arrow']}>
            <div
              className={classNames(isLeaf && styles['display-none'])}
              style={{ transform: `rotate(${isExpand ? 90 : 0}deg)` }}
              onClick={() => handleExpand(node, isExpand)}
            >
              <ArrowRightOutline fontSize={12} pointer />
            </div>
          </div>
          <div
            className={classNames(styles['tree-line-head-title'])}
            onClick={() => props?.onSelect?.(node)}
          >
            {node.title}
          </div>
        </div>
        {node.children?.map(renderTreeLine)}
      </div>
    );
  }

  return (
    <div
      style={props?.style}
      className={classNames(
        styles['tree'],
        styles['tree-line'],
        props?.bordered && styles['bordered'],
      )}
    >
      {data?.map(renderTreeLine)}
    </div>
  );
}
