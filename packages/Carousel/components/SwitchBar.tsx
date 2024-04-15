/**
 * SwitchBar
 *
 * @author tangjiahui
 * @date 2024/01/31
 */
import React from 'react';
import classNames from 'classnames';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import './SwitchBar.less';

export type SwitchBarType = 'rect' | 'dot' | 'line';
export interface SwitchBarProps {
  type?: SwitchBarType;
  current: number;
  total: number;
  style?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
  onChange?: (current: number) => void;
}

export type SwitchBarFC = React.ForwardRefExoticComponent<SwitchBarProps>;
const SwitchBar: SwitchBarFC = React.forwardRef(function (
  props: SwitchBarProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const prefix = usePrefix('switchBar');
  const type = props.type || 'line';

  function renderItem(total: number): React.ReactNode {
    const list: React.ReactNode[] = [];
    const isValue = type === 'rect';

    for (let i = 0; i < total; i++) {
      const isChoose = i === props?.current;
      list.push(
        <div
          key={i}
          style={props?.itemStyle}
          className={classNames(`${prefix}-${type}`, isChoose && `${prefix}-choose`)}
          onClick={() => props?.onChange?.(i)}
        >
          {isValue ? i + 1 : undefined}
        </div>,
      );
    }

    return list;
  }

  return (
    <div ref={ref} className={`${prefix}`} style={props?.style}>
      {renderItem(props.total)}
    </div>
  );
});

export default SwitchBar;
