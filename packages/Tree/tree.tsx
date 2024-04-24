/**
 * Tree
 *
 * @author tangjiahui
 * @date 2024/7/1
 */
import React, { DOMAttributes, ForwardedRef, RefAttributes, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ArrowRightOutline } from '../Icon';
import { isBoolean } from '@/_utils';
import { usePrefix } from '@/ConfigProvider/context/prefixContext';
import { omit } from '@/_utils/object';
import './tree.less';

export type TreeNode = {
  key?: string;
  title?: React.ReactNode;
  isLeaf?: boolean; // 节点是否叶子节点（叶子节点不能展开，会强制isExpand为false）
  isExpand?: boolean; // 节点是否展开
  children?: TreeNode[];
};

export interface BaseTreeProps {
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
  /**
   * @description 选中回调
   */
  onSelect?: (node: TreeNode) => void;
  /**
   * @description 展开回调
   */
  onExpand?: (node: TreeNode) => void;
  /**
   * style
   */
  style?: React.CSSProperties;
  /**
   * className
   */
  className?: string;
}
export type BaseTreePropsKeys = keyof BaseTreeProps;
export type TreeProps = BaseTreeProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

const privateKeys: BaseTreePropsKeys[] = [
  'bordered',
  'treeData',
  'onSelect',
  'onExpand',
  'style',
  'className',
];

export type TreeFC = React.ForwardRefExoticComponent<TreeProps>;
const Tree: TreeFC = React.forwardRef(function Tree(
  props: TreeProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const [data, setData] = useState<TreeNode[]>([]);

  const prefix = usePrefix('tree');
  const originProps: DOMAttributes<HTMLDivElement> = omit(props, privateKeys);

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
      <div key={node?.key} className={classNames(`${prefix}-line`, !isExpand && `${prefix}-hide`)}>
        <div className={`${prefix}-line-head`}>
          <div className={`${prefix}-line-head-arrow`}>
            <div
              className={classNames(isLeaf && `${prefix}-hide`)}
              style={{ transform: `rotate(${isExpand ? 90 : 0}deg)` }}
              onClick={() => handleExpand(node, isExpand)}
            >
              <ArrowRightOutline fontSize={12} pointer />
            </div>
          </div>
          <div
            className={classNames(`${prefix}-line-head-title`)}
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
      {...originProps}
      className={classNames(
        props?.className,
        prefix,
        `${prefix}-line`,
        props?.bordered && `${prefix}-border`,
      )}
      style={props?.style}
      ref={ref}
    >
      {data?.map(renderTreeLine)}
    </div>
  );
});

export default Tree;
