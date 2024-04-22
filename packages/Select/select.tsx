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
  /**
   * @description 是否块级
   * @default false
   */
  block?: boolean;
  /**
   * @description 是否允许清空
   * @default false
   */
  allowClear?: boolean;
  /**
   * @description 受控显示下拉
   * @default undefined
   */
  open?: boolean;
  /**
   * @description 受控绑定值
   * @default undefined
   */
  value?: ValueType;
  /**
   * @description 占位符
   * @default "请选择"
   */
  placeholder?: string;
  /**
   * @description 下拉选项
   * @default undefined
   */
  options?: OptionProps[];
  /**
   * @description 下拉visible回调
   * @default (visible: boolean) => void;
   */
  onOpenChange?: (visible: boolean) => void;
  /**
   * @description 选中下拉框回调值
   * @default (key?: ValueType, option?: OptionProps) => void;
   */
  onChange?: (key?: ValueType, option?: OptionProps) => void;
  /**
   * @description 下拉框样式
   * @default undefined
   */
  style?: React.CSSProperties;
  /**
   * className
   */
  className?: string;
  /**
   * @description 支持JSX格式传入选项
   * @default undefined
   */
  children?: SelectChildren;
};
export type BaseSelectPropsKeys = keyof BaseSelectProps;
export type SelectProps = BaseSelectProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

const privateKeys: BaseSelectPropsKeys[] = [
  'block',
  'allowClear',
  'open',
  'value',
  'placeholder',
  'options',
  'onOpenChange',
  'onChange',
  'style',
  'className',
];

export type SelectFC = React.ForwardRefExoticComponent<SelectProps> & {
  Option: SelectOptionFC;
};

const Select: SelectFC = React.forwardRef(function Select(
  props: SelectProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const locales = useLocale();
  const { placeholder = locales.selectPlaceholder } = props;
  const selectRef = useRef<HTMLDivElement>(null);
  const prefix = usePrefix('select');
  const optionPrefix = usePrefix('selectOption');

  const [current, setCurrent] = useState<OptionProps>();

  const [panelVisible, setPanelVisible] = useState(false);

  // use 'value' from outside.
  const isForceValueRef = useRef(props?.value !== undefined);

  // use 'open' from outside.
  const isForceOpenRef = useRef(props?.open !== undefined);

  const options = useMemo(
    () => getOptions(props?.options, props?.children),
    [props?.options, props?.children],
  );

  function handleClickOption(option?: OptionProps) {
    props?.onOpenChange?.(false);
    props?.onChange?.(option?.value, option);

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
        setCurrent(options.find((option: OptionProps) => props?.value === option.value));
      }
    },
    isForceValueRef.current ? [props?.value, options] : [],
  );

  return (
    <DropDown
      style={{ maxHeight: 256, overflowY: 'auto' }}
      open={isForceOpenRef.current ? props?.open : panelVisible}
      onOpenChange={(visible: boolean) => {
        setPanelVisible(visible);
        props?.onOpenChange?.(visible);
      }}
      popupPanel={
        <div style={{ padding: '4px 0', fontSize: '0.875em' }}>
          {options?.map((option: OptionProps) => {
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
        tabIndex={0}
        ref={selectRef}
        style={props?.style}
        className={classNames(props?.className, props?.block && `${prefix}-block`, prefix)}
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
              isReplace={props?.allowClear && !!current}
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
