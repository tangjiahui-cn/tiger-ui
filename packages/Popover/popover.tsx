import ToolTip, { ToolTipProps } from '../ToolTip';
import { usePrefix } from '@/ConfigProvider';
import classNames from 'classnames';
import './popover.less';

export interface PopoverProps extends ToolTipProps {
  /** content */
  content?: React.ReactNode;
  /** className */
  className?: string;
  /** style */
  style?: React.CSSProperties;
}

const Popover = function (props: PopoverProps) {
  const { title, content, className, style, ...rest } = props;
  const prefix = usePrefix('popover');

  const toolTipTitle: React.ReactNode = (
    <div className={classNames(`${prefix}-body`, className)} style={style}>
      {title ? <div className={`${prefix}-body-title`}>{title}</div> : null}
      {content ? <div className={`${prefix}-body-content`}>{content}</div> : null}
    </div>
  );

  return (
    <ToolTip
      panelClassName={prefix}
      panelTriangleClassName={`${prefix}-triangle`}
      title={toolTipTitle}
      {...rest}
    />
  );
};

export default Popover;
