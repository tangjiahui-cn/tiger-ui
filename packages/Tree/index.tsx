import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { ArrowRightOutline } from '../Icon';
import { isBoolean } from '../_utils';
import { useStyle } from './style';

export type TreeNode = {
  key?: string;
  title?: React.ReactNode;
  isLeaf?: boolean; // 节点是否叶子节点（叶子节点不能展开，会强制isExpand为false）
  isExpand?: boolean; // 节点是否展开
  children?: TreeNode[];
};

export interface TreeProps {
  /**
   * @description 样式
   */
  style?: React.CSSProperties;
  /**
   * @description 是否显示边框
   * @default false
   */
  bordered?: boolean;
  /**
   * @description 树数据
   */
  treeData?: TreeNode[];
  // todo: 受控的数据
  // selectedKeys?: string[];
  // expandedKeys?: string[];
  /**
   * @description 选中回调
   */
  onSelect?: (node: TreeNode) => void;
  /**
   * @description 展开回调
   */
  onExpand?: (node: TreeNode) => void;
}

export default function Tree(props: TreeProps) {
  const [data, setData] = useState<TreeNode[]>([]);
  const style = useStyle('tree');

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
        className={classNames(style.treeLine(), !isExpand && style.treeLineHide())}
      >
        <div className={style.treeLineHead()}>
          <div className={style.treeLineHeadArrow()}>
            <div
              className={classNames(isLeaf && style.treeDisplayNone())}
              style={{ transform: `rotate(${isExpand ? 90 : 0}deg)` }}
              onClick={() => handleExpand(node, isExpand)}
            >
              <ArrowRightOutline fontSize={12} pointer />
            </div>
          </div>
          <div
            className={classNames(style.treeLineHeadTitle())}
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
        style.tree(),
        style.treeLine(),
        props?.bordered && style.treeBordered(),
      )}
    >
      {data?.map(renderTreeLine)}
    </div>
  );
}
