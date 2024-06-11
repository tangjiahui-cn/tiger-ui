export interface TreeNode {
  key?: string;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  selectable?: boolean;
  isLeaf?: boolean;
  disabled?: boolean;
  children?: TreeNode[];
}

export type InnerTreeNode = TreeNode & {
  /** treeData level. (Index From 0). */
  _level?: number;
  /** current expand status. */
  _isExpanded?: boolean;
  /** current select status. */
  _isSelected?: boolean;
};
