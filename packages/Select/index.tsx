import * as React from 'react';
import styles from './index.less';
import { useEffect, useMemo, useRef, useState } from 'react';
import PopupPanel, { GetPopularContainer } from '@/Select/PopupPanel';
import { useGetConfig } from '@/ConfigProvider';

export type Key = string | number;
export interface Option {
  label: string;
  value: Key;
}

type OptionMap = {
  [k: string]: Option;
};

export interface SelectProps {
  // 受控属性
  value?: string;
  // 下拉框选项
  options?: Option[];
  // 是否块级属性
  block?: boolean;
  // 浮层挂载位置
  getPopularContainer?: GetPopularContainer;
  // 下拉框占位样式
  style?: React.CSSProperties;
  // 占位符
  placeholder?: string;
  // 下拉框选中回调事件
  onChange?: (value?: Key, label?: string, option?: Option) => void;
  // 子元素
  children?: React.ReactNode;
}

export default function Select(props: SelectProps) {
  const { locale } = useGetConfig();
  const { style = {}, placeholder = locale.inputPlaceholder } = props;
  const headDom = useRef(null);

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
      className={styles['select-popup']}
      style={{
        left: popupInfo.left,
        top: popupInfo.top,
        width: popupInfo.width,
      }}
    >
      {options.map((option: Option) => {
        const isChoose: boolean = option.value === currentOption?.value;
        const classes: string =
          `${styles['select-option']} ` + `${isChoose ? styles['select-option-choose'] : ''}`;
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
          ...style,
        }}
        className={styles.select}
        onMouseDown={() => {
          initPopupPanelInfo();
          setPopupVisible(true);
        }}
      >
        <span className={!currentOption ? styles['select-placeholder'] : ''}>
          {currentOption?.label || placeholder}
        </span>
      </div>
      <PopupPanel
        visible={popupVisible}
        getPopularContainer={props?.getPopularContainer}
        style={{
          width: popupInfo.width,
          left: popupInfo.left,
          top: popupInfo.top,
          background: 'white',
        }}
        onBlur={() => {
          setPopupVisible(false);
        }}
      >
        {selectBody}
      </PopupPanel>
    </>
  );
}
