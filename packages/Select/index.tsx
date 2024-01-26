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
import styles from './index.less';
import classNames from 'classnames';
import { CloseCircleFilled, DownOutlined } from '@ant-design/icons';
import { Replace } from './components/Replace';
import { getOptions } from './utils/getOptions';

export * from './Option';
export type ValueType = string | undefined | null;
export type OptionProps = {
  label?: React.ReactNode;
  value?: ValueType;
};

export type SelectProps = {
  allowClear?: boolean; // 是否允许清空
  open?: boolean; // 是否打开
  value?: ValueType; // 手动指定值
  placeholder?: string; // 占位符
  options?: OptionProps[]; // 下拉选项
  style?: React.CSSProperties; // 下拉框整体样式
  children?: React.ReactElement[]; // 传入 Option
  onDropdownVisibleChange?: (visible: boolean) => void;
  onChange?: (key?: ValueType, option?: OptionProps) => void;
  sign: string;
};

Select.Option = Option;
export default function Select(props: SelectProps) {
  const { placeholder = '请输入' } = props;
  const selectRef = useRef<HTMLDivElement>(null);
  const isOuterRef = useRef(false);
  const unClickFnRef = useRef<(isEmitVisibleChange?: boolean) => void>();

  const [visible, setVisible] = useState(false);
  const [rect, setRect] = useState<DOMRect>();
  const [current, setCurrent] = useState<OptionProps>();

  // use value front outer.
  const isForceValueRef = useRef(props?.value !== undefined);

  // dropdown is visible or hide at this render.
  const currentVisible = props?.open || visible;

  const options = useMemo(
    () => getOptions(props?.options, props?.children),
    [props?.options, props?.children],
  );

  function emitDropdownVisibleChange(target?: boolean) {
    props?.onDropdownVisibleChange?.(
      target !== undefined ? target : props?.open === undefined ? !visible : !props?.open,
    );
  }

  function handleClickOption(option?: OptionProps) {
    emitDropdownVisibleChange(false);
    setVisible(false);
    props?.onChange?.(option?.value, option);
    if (!isForceValueRef.current) {
      setCurrent(option);
    }
  }

  useEffect(() => {
    if (!selectRef.current) return;
    const rect: DOMRect = selectRef.current?.getBoundingClientRect?.();
    setRect(rect);
  }, []);

  useEffect(() => {
    if (isForceValueRef.current) {
      setCurrent(options.find((option: OptionProps) => props?.value === option.value));
    }
  }, [props?.value, options]);

  return (
    <div
      tabIndex={0}
      ref={selectRef}
      style={{
        ...props?.style,
      }}
      className={styles.select}
      onPointerDown={() => {
        emitDropdownVisibleChange();
        if (props?.open !== undefined) return;
        setVisible(!visible);
      }}
      onPointerLeave={() => {
        isOuterRef.current = true;

        // add click listener.
        unClickFnRef.current = (() => {
          function down() {
            if (isOuterRef.current) {
              setVisible(false);
              unClickFnRef.current?.(true);
            }
          }
          window.addEventListener('pointerdown', down);
          return (isEmitVisibleChange?: boolean) => {
            window.removeEventListener('pointerdown', down);
            unClickFnRef.current = undefined;
            if (isEmitVisibleChange) {
              emitDropdownVisibleChange(false);
            }
          };
        })();
      }}
      onPointerEnter={() => {
        isOuterRef.current = false;
        unClickFnRef.current?.();
      }}
    >
      <div className={styles.select_header}>
        <div className={styles.select_header_text}>
          {current?.label || current?.value || (
            <span className={styles.select_placeholder}>{placeholder}</span>
          )}
        </div>
        <div className={styles.select_header_icon}>
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

      <DropDown
        rect={rect}
        visible={currentVisible}
        onMouseLeave={() => {
          isOuterRef.current = true;
        }}
        onMouseEnter={() => {
          isOuterRef.current = false;
        }}
        innerStyle={{ padding: '4px 0', fontSize: '0.875em' }}
      >
        {options?.map((option: OptionProps) => {
          const isChoose = option.value === current?.value;
          return (
            <div
              key={option?.value}
              className={classNames(styles.select_option, isChoose && styles.select_option_choose)}
              onClick={() => handleClickOption(option)}
            >
              {option?.label}
            </div>
          );
        })}
      </DropDown>
    </div>
  );
}
