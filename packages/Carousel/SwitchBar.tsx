import * as React from 'react';
import styles from './index.less';
import classNames from 'classnames';

export type SwitchBarType = 'rect' | 'dot' | 'line';
export interface SwitchBarProps {
  type?: SwitchBarType;
  current: number;
  total: number;
  style?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
  onChange?: (current: number) => void;
}

export function SwitchBar(props: SwitchBarProps) {
  const { type = 'rect' } = props;

  function renderItem(total: number): React.ReactNode {
    const list: React.ReactNode[] = [];
    const isValue = type === 'rect';

    for (let i = 0; i < total; i++) {
      const isChoose = i === props?.current;
      list.push(
        <div
          key={i}
          className={classNames(
            styles[`switchBar-${type}`],
            isChoose && styles[`switchBar-${type}-choose`],
          )}
          style={props?.itemStyle}
          onClick={() => props?.onChange?.(i)}
        >
          {isValue ? i + 1 : undefined}
        </div>,
      );
    }

    return list;
  }

  return (
    <div className={styles.switchBar} style={props?.style}>
      {renderItem(props.total)}
    </div>
  );
}
