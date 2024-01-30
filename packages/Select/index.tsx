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

export * from './Option';
export type ValueType = string | undefined | null;
export type OptionProps = {
  label?: React.ReactNode;
  value?: ValueType;
};

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
  children?: React.ReactElement[];
  /**
   * @description 下拉visible回调
   * @default (visible: boolean) => void;
   */
  onDropdownVisibleChange?: (visible: boolean) => void;
  /**
   * @description 选中下拉框回调值
   * @default (key?: ValueType, option?: OptionProps) => void;
   */
  onChange?: (key?: ValueType, option?: OptionProps) => void;
};

Select.Option = Option;
export default function Select(props: SelectProps) {
  const { placeholder = '请输入' } = props;
  const selectRef = useRef<HTMLDivElement>(null);
  const isOuterRef = useRef(false);
  const unClickFnRef = useRef<(isEmitVisibleChange?: boolean) => void>();
  const style = useStyle('select');

  const [visible, setVisible] = useState(false);
  const [rect, setRect] = useState<DOMRect>();
  const [current, setCurrent] = useState<OptionProps>();

  // use value front outer.
  const isForceValueRef = useRef(props?.value !== undefined);

  const options = useMemo(
    () => getOptions(props?.options, props?.children),
    [props?.options, props?.children],
  );

  function emitDropdownVisibleChange(target?: boolean) {
    const nextVisible =
      target !== undefined ? target : props?.open === undefined ? !visible : !props?.open;
    props?.onDropdownVisibleChange?.(nextVisible);
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
    if (isForceValueRef.current) {
      setCurrent(options.find((option: OptionProps) => props?.value === option.value));
    }
  }, [props?.value, options]);

  useEffect(() => {
    if (props?.open !== undefined) {
      setVisible(props?.open);
    }
  }, [props?.open]);

  useEffect(() => {
    if (visible) {
      setRect(selectRef.current?.getBoundingClientRect?.());
    }
  }, [visible]);

  return (
    <div
      tabIndex={0}
      ref={selectRef}
      style={props?.style}
      className={classNames(style.select(), props?.block && style.selectBlock())}
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

      <DropDown
        rect={rect}
        visible={visible}
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
              className={classNames(style.selectOption(), isChoose && style.selectOptionChoose())}
              onPointerDown={() => handleClickOption(option)}
            >
              {option?.label}
            </div>
          );
        })}
      </DropDown>
    </div>
  );
}
