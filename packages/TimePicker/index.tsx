import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import moment, { Moment } from 'moment';
import { doubleString } from '@/_utils';
import ReactDOM from 'react-dom';
import styles from './index.less';
import PopupPanel from '@/Select/PopupPanel';
import classNames from 'classnames';
import { useGetConfig } from '@/ConfigProvider';

function genNumberArray(size: number): number[] {
  return Array(size)
    .fill(0)
    .map((x, index) => index);
}

const hourArr = genNumberArray(24);
const minuteArr = genNumberArray(60);
const secondArr = genNumberArray(60);

type ValueType = [number, number, number];

export type TimePickerType = 'second' | 'minute' | 'hour';

export interface TimePickerProps {
  // 时间选择器类型
  picker?: TimePickerType;
  // 样式
  style?: React.CSSProperties;
  // 外界绑定值
  value?: Moment;
  // 默认值
  defaultValue?: Moment;
  // 占位符
  placeholder?: React.ReactNode;
  // 值回调事件
  onChange?: (time: Moment, str: string) => void;
}

export default function TimePicker(props: TimePickerProps) {
  const { locale } = useGetConfig();
  const { picker = 'second', placeholder = locale?.timepicker?.placeholder } = props;
  const headDom = useRef<any>();

  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [popupInfo, setPopupInfo] = useState<{
    top: number;
    left: number;
    width: number;
  }>({
    top: 1,
    left: 2,
    width: 3,
  });

  const [chooseValue, setChooseValue] = useState<ValueType>([0, 0, 0]);
  const [value, setValue] = useState<ValueType | undefined>(momentToValue(props?.defaultValue));
  const renderValue =
    value
      ?.map((v, index) => {
        if (
          picker === 'second' ||
          (picker === 'minute' && index < 2) ||
          (picker === 'hour' && index < 1)
        )
          return doubleString(v);
        return false;
      })
      .filter(Boolean)
      .join(' : ') || '';

  function valueToString(v: ValueType) {
    return v?.map(doubleString).join(':') || '';
  }

  function momentToValue(mom?: Moment): ValueType | undefined {
    if (!mom) return undefined;
    const str = mom?.format('HH:mm:ss');
    const value: any = str?.split(':')?.map(Number) || [0, 0, 0];
    return value;
  }

  function initPopupPanelInfo() {
    const info: DOMRect = (headDom?.current as any)?.getBoundingClientRect();
    setPopupInfo({
      width: info.width,
      left: info.x,
      top: info.bottom,
    });
  }

  function handleChoose(target: ValueType) {
    setPopupVisible(false);
    if (props?.onChange || props?.value !== undefined) {
      const timeStr = valueToString(target);
      props?.onChange?.(moment(moment().format(`YYYY-MM-DD ${timeStr}`)), timeStr);
      return;
    }
    setValue(target);
  }

  function handleOpen() {
    initPopupPanelInfo();
    setChooseValue(value ? [...value] : [0, 0, 0]);
    setPopupVisible(true);
  }

  useEffect(() => {
    if (props?.value === undefined) return;
    const str = props?.value?.format('HH:mm:ss');
    const value: any = str?.split(':')?.map(Number) || [0, 0, 0];
    setValue(value);
  }, [props?.value]);

  return (
    <div className={styles['timepicker']}>
      <div className={styles['timepicker-header']} ref={headDom} onMouseDown={handleOpen}>
        {renderValue || <span className={styles['timepicker-placeholder']}>{placeholder}</span>}
      </div>

      {ReactDOM.createPortal(
        <PopupPanel
          visible={popupVisible}
          style={{
            left: popupInfo.left,
            top: popupInfo.top,
            background: 'white',
          }}
          onBlur={() => {
            setPopupVisible(false);
          }}
        >
          <div style={{ width: 150 }}>
            <div style={{ height: 256 }} className={styles['timepicker-picker']}>
              {[hourArr, minuteArr, secondArr]
                .filter((_, index) => {
                  return (
                    picker === 'second' ||
                    (picker === 'minute' && index < 2) ||
                    (picker === 'hour' && index < 1)
                  );
                })
                .map((arr: number[], index: number) => {
                  return (
                    <div key={index} className={styles['timepicker-picker-column']}>
                      {arr.map((v: number, vIndex: number) => {
                        const isSelected = chooseValue?.[index] === v;
                        return (
                          <div
                            key={`${index}-${vIndex}`}
                            className={classNames(
                              styles['timepicker-picker-item'],
                              isSelected && styles['timepicker-picker-item-choose'],
                            )}
                            onClick={() => {
                              setChooseValue((chooseValue) => {
                                chooseValue[index] = v;
                                return [...chooseValue];
                              });
                            }}
                          >
                            {doubleString(v)}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
            </div>
            <div className={styles['timepicker-bottom']}>
              <div className={styles['timepicker-bottom-now']}>{locale?.timepicker?.now}</div>
              <div
                className={styles['timepicker-bottom-confirm']}
                onClick={() => handleChoose(chooseValue)}
              >
                {locale?.timepicker?.confirm}
              </div>
            </div>
          </div>
        </PopupPanel>,
        document.body,
      )}
    </div>
  );
}
