/**
 * Select
 *
 * @author tangjiahui
 * @date 2024/1/25
 */
import * as React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { DropDown } from '..';
import { Option } from './Option';
import classNames from 'classnames';
import { CloseCircleFilled, DownOutlined } from '@ant-design/icons';
import { Replace } from './components/Replace';
import { getOptions } from './utils/getOptions';
import { useStyle } from './style';
import { useGetLocaleValues } from '@/ConfigProvider';

export * from './Option';
export type ValueType = string | undefined | null;
export type OptionProps = {
  label?: React.ReactNode;
  value?: ValueType;
};
export type SelectChildren = React.ReactElement | React.ReactElement[];

export type SelectProps = {
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
   * @description 下拉框样式
   * @default undefined
   */
  style?: React.CSSProperties;
  /**
   * @description 支持JSX格式传入选项
   * @default undefined
   */
  children?: SelectChildren;
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
};

Select.Option = Option;
export default function Select(props: SelectProps) {
  const locales = useGetLocaleValues();
  const { placeholder = locales.selectPlaceholder } = props;
  const selectRef = useRef<HTMLDivElement>(null);
  const style = useStyle('select');

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
                className={classNames(style.selectOption(), isChoose && style.selectOptionChoose())}
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
        className={classNames(style.select(), props?.block && style.selectBlock())}
        onPointerDown={(e) => {
          setPanelVisible(true);
        }}
      >
        <div className={style.selectHeader()}>
          <div className={style.selectHeaderText()}>
            {current?.label || current?.value || (
              <span className={style.selectPlaceholder()}>{placeholder}</span>
            )}
          </div>
          <div className={style.selectHeaderIcon()}>
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
}
