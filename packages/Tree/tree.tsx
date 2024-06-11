/**
 * Tree
 *
 * @author tangjiahui
 * @date 2023/7/1
 * @lastModifyTime 2024/6/6
 */
import { DOMAttributesWithoutRefAndChildrenAndOnSelect } from '@/_types';
import { ForwardedRef, forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import TreeLine from './treeLine';
import type { InnerTreeNode, TreeNode } from './types';
import { useListenValue } from '@/_hooks';
import { isBoolean } from '@/_utils';

export { TreeNode };
export interface TreeProps extends DOMAttributesWithoutRefAndChildrenAndOnSelect<HTMLDivElement> {
  // TODO: wait for work.
  // /** tree height. If you set height, will enable virtual scroll automatic. */
  // height?: number;
  /** tree data */
  treeData?: TreeNode[];
  /** show leaf icon */
  showIcon?: boolean;
  /** custom leaf icon */
  icon?: React.ReactNode | ((node: TreeNode) => React.ReactNode);
  /** switch node icon */
  switcherIcon?: React.ReactNode | ((node: TreeNode) => React.ReactNode);
  /** if select multiple node */
  multiple?: boolean;
  /** if can select */
  selectable?: boolean;
  /** selected keys */
  selectedKeys?: string[];
  /** default selected keys */
  defaultSelectedKeys?: string[];
  /** expanded keys */
  expandedKeys?: string[];
  /** default expanded keys */
  defaultExpandedKeys?: string[];
  /** disabled status */
  disabled?: boolean;
  /** style */
  style?: React.CSSProperties;
  /** className */
  className?: string;
  /** expand callback */
  onExpand?: (expandedKeys: string[]) => void;
  /** select callback */
  onSelect?: (selectedKeys: string[]) => void;
}

const Tree = forwardRef((props: TreeProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    treeData = [],
    multiple,
    showIcon,
    icon,
    switcherIcon,
    selectable = true,
    selectedKeys,
    defaultSelectedKeys,
    expandedKeys,
    defaultExpandedKeys,
    disabled,
    style,
    className,
    onExpand,
    onSelect,
    ...rest
  } = props;

  const isControlledExpandedKeys: boolean = useMemo(() => !!expandedKeys, []);
  const isControlledSelectedKeys: boolean = useMemo(() => !!selectedKeys, []);

  const [flatTreeData, setFlatTreeData] = useState<InnerTreeNode[]>([]);
  const [currentExpandedKeys, setCurrentExpandedKeys] = useListenValue<string[] | undefined>(
    expandedKeys || defaultExpandedKeys || [],
    expandedKeys,
  );
  const [currentSelectedKeys, setCurrentSelectedKeys] = useListenValue<string[] | undefined>(
    selectedKeys || defaultSelectedKeys || [],
    selectedKeys,
  );

  const getFlatTreeData = useCallback(
    (
      treeData: TreeNode[],
      currentExpandedKeys: string[] = [],
      currentSelectedKeys: string[] = [],
    ) => {
      const result: InnerTreeNode[] = [];
      function DFS(list: TreeNode[], _level: number = 0): InnerTreeNode[] {
        list.forEach((node: TreeNode) => {
          const key: any = node?.key;
          const _node: InnerTreeNode = {
            ...node,
            isLeaf: !node?.children,
            _level,
            _isExpanded: currentExpandedKeys?.includes(key) || false,
            _isSelected: currentSelectedKeys?.includes(key) || false,
          };
          result.push(_node);
          if (_node?._isExpanded && node?.children) {
            DFS(node.children, _level + 1);
          }
        });
        return result;
      }
      return DFS(treeData);
    },
    [],
  );

  useEffect(() => {
    setFlatTreeData(getFlatTreeData(treeData, currentExpandedKeys, currentSelectedKeys));
  }, [treeData, currentExpandedKeys, currentSelectedKeys]);

  return (
    <div style={style} className={className} {...rest} ref={ref}>
      {flatTreeData.map((treeData: InnerTreeNode) => {
        const nodeSwitcherIcon: React.ReactNode =
          typeof switcherIcon === 'function' ? switcherIcon(treeData) : switcherIcon;
        const nodeIcon: React.ReactNode = typeof icon === 'function' ? icon(treeData) : icon;

        return (
          <TreeLine
            showIcon={showIcon}
            icon={nodeIcon}
            switcherIcon={nodeSwitcherIcon}
            key={treeData.key}
            title={treeData?.title}
            level={treeData._level}
            isExpanded={treeData._isExpanded}
            isSelected={treeData._isSelected}
            expandable={!treeData?.isLeaf}
            selectable={isBoolean(treeData?.selectable) ? treeData?.selectable : selectable}
            onSelect={() => {
              const isSelected = !treeData?._isSelected;
              const targetSelectedKeys: string[] = isSelected
                ? [...(multiple ? currentSelectedKeys || [] : []), `${treeData.key}`]
                : currentSelectedKeys?.filter?.((key) => key !== treeData.key) || [];
              if (isControlledSelectedKeys) {
                onSelect?.(targetSelectedKeys);
              } else {
                setCurrentSelectedKeys(targetSelectedKeys);
              }
            }}
            onExpand={() => {
              const isExpand = !treeData?._isExpanded;
              const targetExpandedKeys: string[] = isExpand
                ? [...(currentExpandedKeys || []), `${treeData.key}`]
                : currentExpandedKeys?.filter?.((key) => key !== treeData.key) || [];
              if (isControlledExpandedKeys) {
                onExpand?.(targetExpandedKeys);
              } else {
                setCurrentExpandedKeys(targetExpandedKeys);
              }
            }}
          />
        );
      })}
    </div>
  );
});

export default Tree;
