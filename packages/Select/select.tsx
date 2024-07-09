/**
 * Select
 *
 * @author tangjiahui
 * @date 2024/1/25
 */
import * as React from 'react';
import {
  DOMAttributes,
  ForwardedRef,
  RefAttributes,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { getOptions } from '@/Select/utils/getOptions';
import { DropDown } from '@/index';
import classNames from 'classnames';
import { Replace } from '@/Select/components/Replace';
import { CloseCircleFilled, DownOutlined } from '@ant-design/icons';
import { SelectOption, SelectOptionFC } from './selectOption';
import { useLocale, usePrefix } from '@/ConfigProvider/ConfigProvider';
import './select.less';

export type * from './selectOption';
export type ValueType = string | undefined | null;
export type OptionProps = {
  label?: React.ReactNode;
  value?: ValueType;
};
export type SelectChildren = React.ReactElement | React.ReactElement[];

export type BaseSelectProps = {
  /** block status */
  block?: boolean;
  /** allow clear */
  allowClear?: boolean;
  /** controlled open from outside */
  open?: boolean;
  /** controlled value from outside */
  value?: ValueType;
  /** select placeholder*/
  placeholder?: string;
  /** select options */
  options?: OptionProps[];
  /** open change callback */
  onOpenChange?: (visible: boolean) => void;
  /** change callback */
  onChange?: (key?: ValueType, option?: OptionProps) => void;
  /** style */
  style?: React.CSSProperties;
  /** className */
  className?: string;
  /** children */
  children?: SelectChildren;
};

export type SelectProps = BaseSelectProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

export type SelectFC = React.ForwardRefExoticComponent<SelectProps> & {
  Option: SelectOptionFC;
};

const Select: SelectFC = React.forwardRef(function Select(
  props: SelectProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const locales = useLocale();
  const {
    placeholder = locales.selectPlaceholder,
    block,
    allowClear,
    open,
    value,
    options,
    onOpenChange,
    onChange,
    style,
    className,
    children,
    ...rest
  } = props;
  const selectRef = useRef<HTMLDivElement>(null);
  const prefix = usePrefix('select');
  const optionPrefix = usePrefix('selectOption');

  const [current, setCurrent] = useState<OptionProps>();

  const [panelVisible, setPanelVisible] = useState(false);

  // use 'value' from outside.
  const isForceValueRef = useRef(value !== undefined);

  // use 'open' from outside.
  const isForceOpenRef = useRef(open !== undefined);

  const innerOptions = useMemo(() => getOptions(options, children), [options, children]);

  function handleClickOption(option?: OptionProps) {
    onOpenChange?.(false);
    onChange?.(option?.value, option);

    // if control 'open' from outside, don't change inside attribute.
    if (!isForceOpenRef.current) {
      setPanelVisible(false);
    }
    // if not control value from outside, change inside immediately.
    if (!isForceValueRef.current) {
      setCurrent(option);
    }
  }

  useImperativeHandle(ref, () => selectRef.current as HTMLDivElement);

  useEffect(
    () => {
      if (isForceValueRef.current) {
        setCurrent(innerOptions.find((option: OptionProps) => value === option.value));
      }
    },
    isForceValueRef.current ? [value, innerOptions] : [],
  );

  return (
    <DropDown
      style={{ maxHeight: 256, overflowY: 'auto' }}
      open={isForceOpenRef.current ? open : panelVisible}
      onOpenChange={(visible: boolean) => {
        setPanelVisible(visible);
        onOpenChange?.(visible);
      }}
      popupPanel={
        <div style={{ padding: '4px 0', fontSize: '0.875em' }}>
          {innerOptions?.map((option: OptionProps) => {
            const isChoose = option.value === current?.value;
            return (
              <div
                key={option?.value}
                className={classNames(optionPrefix, isChoose && `${optionPrefix}-choose`)}
                onPointerDown={() => handleClickOption(option)}
              >
                {option?.label}
              </div>
            );
          })}
        </div>
      }
    >
      <div
        {...rest}
        tabIndex={0}
        ref={selectRef}
        style={style}
        className={classNames(className, block && `${prefix}-block`, prefix)}
        onPointerDown={(e) => {
          setPanelVisible(true);
        }}
      >
        <div className={`${prefix}-header`}>
          <div className={`${prefix}-header-text`}>
            {current?.label || current?.value || (
              <span className={`${prefix}-placeholder`}>{placeholder}</span>
            )}
          </div>
          <div className={`${prefix}-header-icon`}>
            <Replace
              isReplace={allowClear && !!current}
              trigger={'hover'}
              replace={
                <CloseCircleFilled
                  onPointerDown={(e) => {
                    handleClickOption(undefined);
                    e.stopPropagation();
                  }}
                />
              }
            >
              <DownOutlined />
            </Replace>
          </div>
        </div>
      </div>
    </DropDown>
  );
}) as SelectFC;

Select.Option = SelectOption;
export default Select;
