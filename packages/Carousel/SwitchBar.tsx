import * as React from 'react';
import classNames from 'classnames';
import { useStyle } from './style/switchBarStyle';

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
  const { type = 'line' } = props;
  const style = useStyle('carousel-bar');

  function renderItem(total: number): React.ReactNode {
    const list: React.ReactNode[] = [];
    const isValue = type === 'rect';

    for (let i = 0; i < total; i++) {
      const isChoose = i === props?.current;
      list.push(
        <div
          key={i}
          className={classNames(
            style.carouseBarType(type),
            isChoose && style.carouseBarTypeChoose(type),
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
    <div className={style.carouseBar()} style={props?.style}>
      {renderItem(props.total)}
    </div>
  );
}
