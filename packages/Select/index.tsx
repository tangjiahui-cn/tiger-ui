import * as React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useGetConfig } from '../ConfigProvider';
import classNames from 'classnames';
import SelectPanel from './PopupPanel';
import { useStyle } from './style';
import useToken from '../_utils/hooks/useToken';

export type Key = string | number;
export interface Option {
  label: string;
  value: Key;
}

type OptionMap = {
  [k: string]: Option;
};

export interface SelectProps {
  /**
   * @description 受控值
   */
  value?: string;
  /**
   * @description 下拉框选项
   */
  options?: Option[];
  /**
   * @description 是否块级属性
   */
  block?: boolean;
  /**
   * @description 下拉框占位样式
   */
  style?: React.CSSProperties;
  /**
   * @description 占位符
   */
  placeholder?: string;
  /**
   * @description 下拉框选中回调事件
   */
  onChange?: (value: Key, label: string, option: Option) => void;
  /**
   * @description 子元素
   */
  children?: React.ReactNode;
}

export default function Select(props: SelectProps) {
  const { locale } = useGetConfig();
  const { placeholder = locale.selectPlaceholder } = props;
  const headDom = useRef(null);
  const style = useStyle('select');
  const token = useToken();

  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [popupInfo, setPopupInfo] = useState<{
    top: number;
    left: number;
    width: number;
  }>({
    top: 0,
    left: 0,
    width: 0,
  });

  const [currentOption, setCurrentOption] = useState<Option | undefined>(undefined);
  const optionsMap = useRef<OptionMap>({});
  const options: any[] = useMemo(() => {
    const listMap: OptionMap = {};
    const list: Option[] =
      props?.options?.map((option) => {
        listMap[option.value] = option;
        return option;
      }) || [];
    optionsMap.current = listMap;
    return list;
  }, [props?.options]);

  function initPopupPanelInfo() {
    const info: DOMRect = (headDom?.current as any)?.getBoundingClientRect();

    setPopupInfo({
      width: info.width,
      left: info.x,
      top: info.bottom,
    });
  }

  const selectBody: React.ReactNode = (
    <div
      className={style.selectPopup()}
      style={{
        left: popupInfo.left,
        top: popupInfo.top,
        width: popupInfo.width,
      }}
    >
      {options.map((option: Option) => {
        const isChoose: boolean = option.value === currentOption?.value;
        const classes: string = classNames(
          style.selectOption(),
          isChoose && style.selectOptionChoose(),
        );
        return (
          <div
            className={classes}
            key={option.value}
            onClick={() => {
              setPopupVisible(false);
              props?.onChange?.(option.value, option.label, option);
            }}
          >
            {option.label}
          </div>
        );
      })}
    </div>
  );

  useEffect(() => {
    setCurrentOption(optionsMap.current?.[props?.value || '']);
  }, [props?.value]);

  useEffect(() => {
    initPopupPanelInfo();
  }, []);

  return (
    <>
      <div
        tabIndex={0}
        ref={headDom}
        style={{
          width: props?.block ? '100%' : 100,
          ...props?.style,
        }}
        className={style.select()}
        onMouseDown={() => {
          initPopupPanelInfo();
          setPopupVisible(true);
        }}
      >
        <span className={classNames(!currentOption && style.selectPlaceholder())}>
          {currentOption?.label || (
            <span style={{ color: token.placeholderColor }}>{placeholder}</span>
          )}
        </span>
      </div>

      <SelectPanel
        visible={popupVisible}
        style={{
          width: popupInfo.width,
          left: popupInfo.left,
          top: popupInfo.top,
          background: 'white',
        }}
        onClickOut={() => {
          setPopupVisible(false);
        }}
      >
        {selectBody}
      </SelectPanel>
    </>
  );
}
