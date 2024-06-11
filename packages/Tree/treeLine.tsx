/**
 * TreeLine
 *
 * @author tangjiahui
 * @date 2024/6/6
 */
import { CaretRightFilled, FileOutlined } from '@ant-design/icons';
import { usePrefix } from '@/ConfigProvider';
import classNames from 'classnames';
import './treeLine.less';

interface TreeLineProps {
  showIcon?: boolean;
  icon?: React.ReactNode;
  switcherIcon?: React.ReactNode;
  title?: React.ReactNode;
  level?: number;
  isLeaf?: boolean;
  isExpanded?: boolean;
  isSelected?: boolean;
  expandable?: boolean;
  selectable?: boolean;
  onExpand?: () => void;
  onSelect?: () => void;
}

export default function TreeLine(props: TreeLineProps) {
  const {
    showIcon,
    icon = <FileOutlined />,
    switcherIcon = <CaretRightFilled style={{ fontSize: 10 }} />,
    title,
    level = 0,
    isExpanded,
    isSelected,
    expandable,
    selectable,
    onExpand,
    onSelect,
  } = props;

  const isLeaf = !expandable;
  const prefix = usePrefix('tree-line');

  return (
    <div className={prefix} style={{ paddingLeft: level * 24 }}>
      <div className={`${prefix}-switcher`} onClick={() => onExpand?.()}>
        {expandable ? (
          <div className={`${prefix}-switcher-wrap`}>
            <div
              className={classNames(
                `${prefix}-switcher-icon`,
                isExpanded && `${prefix}-switcher-icon-expand`,
              )}
            >
              {switcherIcon}
            </div>
          </div>
        ) : null}
      </div>
      <div
        className={classNames(`${prefix}-title`, {
          [`${prefix}-title-selectable`]: selectable,
          [`${prefix}-title-selectable-selected`]: isSelected,
        })}
        onClick={() => selectable && onSelect?.()}
      >
        {showIcon && isLeaf && <div style={{ width: 20 }}>{icon}</div>}
        {title}
      </div>
    </div>
  );
}
