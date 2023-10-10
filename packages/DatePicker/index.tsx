import * as React from 'react';
import type { Moment } from 'moment';
import styles from './index.less';
import { useEffect, useRef, useState } from 'react';
import SelectPanel from '../Select/PopupPanel';
import { createDateArrayByMonth, createDateItem, doubleNumStr } from './utils';
import { useGetConfig } from '../ConfigProvider';
import moment from 'moment';
import { useUpdateEffect } from '../_hooks';
import classNames from 'classnames';

export type DateItem = {
  year: number;
  month: number;
  day: number;
  key: string;
  moment: Moment;
  dateStr: string;
  _current?: boolean; // 当前月份
};

export type PanelDateProps = {
  year: number;
  month: number;
  day: number;
};

export interface DatePickerProps {
  // 外界绑定值
  value?: Moment;
  // 默认提示语
  placeholder?: string;
  // 头部是否占据一行
  block?: boolean;
  // 头部样式
  style?: React.CSSProperties;
  // 时间格式
  format?: string; // default: YYYY-MM-DD
  // 日期改变回调事件
  onChange?: (str?: string, mom?: Moment, item?: DateItem) => void;
}

const dayList: string[] = ['一', '二', '三', '四', '五', '六', '日'];
export default function DatePicker(props: DatePickerProps) {
  const { locale } = useGetConfig();
  const { style = {}, placeholder = locale.inputPlaceholder, format = 'YYYY-MM-DD' } = props;
  const headDom = useRef(null);

  const [dateArray, setDateArray] = useState<DateItem[][]>([]);

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

  const [panelDate, setPanelDate] = useState<PanelDateProps>({
    year: 2023,
    month: 5,
    day: 15,
  });

  const [current, setCurrent] = useState<DateItem | null>(null);

  function changeYearMonth(type: 'year' | 'month', value: number) {
    switch (type) {
      case 'month':
        panelDate.month += value;
        if (panelDate.month > 12) {
          panelDate.month = 1;
          panelDate.year++;
        } else if (panelDate.month < 1) {
          panelDate.month = 12;
          panelDate.year--;
        }
        break;
      case 'year':
        panelDate.year += value;
        break;
    }
    setPanelDate({ ...panelDate });
  }

  function initPopupPanelInfo() {
    const info: DOMRect = (headDom?.current as any)?.getBoundingClientRect();
    setPopupInfo({
      width: info.width,
      left: info.x,
      top: info.bottom,
    });
    setDateArray(createDateArrayByMonth(moment().format('YYYY-MM')));
  }

  function renderDateLine(lineArr: DateItem[], key: number): React.ReactNode {
    return (
      <div className={styles['datePicker-body-content-line']} key={key}>
        {lineArr.map((dateItem: DateItem) => {
          const classes = [
            styles[`datePicker-body-content-item${dateItem?._current ? '-current' : ''}`],
          ];
          if (dateItem.key === current?.key && panelDate.month === current.month) {
            classes.push(styles['datePicker-body-content-item-choose']);
          }
          return (
            <div
              key={dateItem.key}
              className={classNames(classes)}
              onClick={() => {
                const current = { ...dateItem };
                current.dateStr = current.moment.format(format);
                setCurrent(current);
                panelDate.year = dateItem.year;
                panelDate.day = dateItem.day;
                panelDate.month = dateItem.month;
                setPanelDate({ ...panelDate });
                props?.onChange?.(current.dateStr, current?.moment, current);
                setPopupVisible(false);
              }}
            >
              {dateItem.day}
            </div>
          );
        })}
      </div>
    );
  }

  useEffect(() => {
    initPopupPanelInfo();
  }, []);

  useEffect(() => {
    if (props?.value) {
      const current: DateItem = createDateItem(props?.value?.date(), props?.value);
      current.dateStr = current.moment.format(format);
      setCurrent(current);
      setPanelDate({ ...current });
    } else {
      !current && setCurrent(null);
    }
  }, [props?.value]);

  useUpdateEffect(() => {
    setDateArray(createDateArrayByMonth(`${panelDate.year}-${doubleNumStr(panelDate.month)}`));
  }, [panelDate]);

  return (
    <>
      <div
        tabIndex={0}
        ref={headDom}
        style={{
          width: props?.block ? '100%' : 200,
          ...style,
        }}
        className={styles.datePicker}
        onMouseDown={() => {
          initPopupPanelInfo();
          setPopupVisible(true);
        }}
      >
        <span className={classNames({ [styles['datePicker-placeholder']]: !current?.dateStr })}>
          {current?.dateStr || placeholder}
        </span>
      </div>

      <SelectPanel
        visible={popupVisible}
        style={{
          left: popupInfo.left,
          top: popupInfo.top,
          background: 'white',
        }}
        onClickOut={() => {
          setPopupVisible(false);
        }}
      >
        <div style={{ display: 'inline-block', boxSizing: 'border-box' }}>
          <div className={styles['datePicker-head']}>
            <span className={styles['datePicker-btn']} onClick={() => changeYearMonth('year', -1)}>
              {'<<'}
            </span>
            <span className={styles['datePicker-btn']} onClick={() => changeYearMonth('month', -1)}>
              {'<'}
            </span>
            <div style={{ padding: '0 24px', display: 'inline-block', fontWeight: 'bold' }}>
              <div style={{ display: 'inline-block', width: 40 }}>{panelDate.year}</div>
              <span>年</span>
              <div style={{ display: 'inline-block', width: 20, textAlign: 'right' }}>
                {panelDate.month}
              </div>
              <span>月</span>
            </div>
            <span className={styles['datePicker-btn']} onClick={() => changeYearMonth('month', 1)}>
              {'>'}
            </span>
            <span className={styles['datePicker-btn']} onClick={() => changeYearMonth('year', 1)}>
              {'>>'}
            </span>
          </div>
          <div className={styles['datePicker-body']}>
            <div className={styles['datePicker-body-head']}>
              {dayList.map((day) => {
                return (
                  <div className={styles['datePicker-body-head-item']} key={day}>
                    {day}
                  </div>
                );
              })}
            </div>
            <div className={styles['datePicker-body-content']}>
              {dateArray.map((lineArray: DateItem[], index: number) => {
                return renderDateLine(lineArray, index);
              })}
            </div>
          </div>
        </div>
      </SelectPanel>
    </>
  );
}
