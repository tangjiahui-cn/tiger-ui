/**
 * Checkbox
 *
 * @author tangjiahui
 * @date 2024/4/13
 */
import { ForwardedRef, MouseEvent, forwardRef, useMemo } from 'react';
import { usePrefix } from '@/ConfigProvider';
import { useListenValue } from '@/_hooks';
import LineWave from './lineWave';
import classNames from 'classnames';
import { HTMLAttributesWithoutOnChange } from '@/_types';
import './checkbox.less';

export interface CheckboxProps extends HTMLAttributesWithoutOnChange<HTMLLabelElement> {
  /** disabled status */
  disabled?: boolean;
  /** indeterminate. only a display effect, cant change check status. */
  indeterminate?: boolean;
  /** default checked */
  defaultChecked?: boolean;
  /** checked, a controlled value from outer. */
  checked?: boolean;
  /** component class */
  className?: string;
  /** component style */
  style?: React.CSSProperties;
  /** component label */
  children?: React.ReactNode;
  /** checked status changed callback. */
  onChange?: (checked: boolean, e: MouseEvent<HTMLLabelElement>) => void;
}

const Checkbox = forwardRef((props: CheckboxProps, ref: ForwardedRef<HTMLLabelElement>) => {
  const {
    indeterminate,
    defaultChecked,
    disabled,
    checked,
    className,
    style,
    children,
    onChange,
    ...rest
  } = props;

  const prefix = usePrefix('checkbox');
  const isControlledChecked = useMemo(() => checked !== undefined, []);
  const [currentChecked, setCurrentChecked] = useListenValue(checked || defaultChecked, checked);

  const classes: string = classNames(prefix, className, {
    [`${prefix}-checked`]: currentChecked,
    [`${prefix}-disabled`]: disabled,
    [`${prefix}-indeterminate`]: indeterminate,
  });

  function handleClick(e: MouseEvent<HTMLLabelElement>) {
    if (disabled) return;
    const targetChecked = !currentChecked;
    if (isControlledChecked) {
      onChange?.(targetChecked, e);
    } else {
      setCurrentChecked(targetChecked);
    }
  }

  return (
    <label {...rest} ref={ref} style={style} className={classes} onClick={handleClick}>
      <LineWave visible={!indeterminate && currentChecked}>
        <span className={`${prefix}-box`} />
      </LineWave>
      {children ? <span>{children}</span> : null}
    </label>
  );
});

export default Checkbox;
