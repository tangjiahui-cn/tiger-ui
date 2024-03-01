/**
 * DatePicker
 *
 * @author tangjiahui
 * @date 2024/2/28
 */
import { DropDown } from '@/index';
import { css } from 'class-css';
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import Space from '@/Space';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import moment, { Moment } from 'moment';
import Line from './components/Line';
import { createCalendar } from '@/DatePicker/utils/createCalendar';
import { useUpdateEffect } from '@/_hooks';
import { momentToDate, getChangeDate, dateToMoment } from './utils/dateUtils';

const iconClass = css({
  fontSize: '0.815em',
  color: 'gray',
  cursor: 'pointer',
  width: 16,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  '&:hover': {
    color: 'black',
  },
});

const clickableClass = css({
  cursor: 'pointer',
  padding: '0 4px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  transition: 'all .3s',
  '&:hover': {
    color: '#3e74dc',
  },
});

const todayClass = css({
  color: '#3e74dc',
  borderTop: '1px solid #e8e8e8',
  textAlign: 'center',
  padding: '8px 0',
  letterSpacing: 1,
});

const todayTextClass = css({
  userSelect: 'none',
  cursor: 'pointer',
  transition: 'all .3s',
  '&:hover': {
    color: '#7fa0de',
  },
});

export type DateType = {
  year: number;
  month: number;
  day: number;
  dateStr: string;
};

export interface DatePickerProps {
  /**
   * @description 样式
   */
  style?: React.CSSProperties;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 受控制
   */
  value?: Moment | null;
  /**
   * @description 值回调
   */
  onChange?: (value?: Moment | null) => void;
}

export default function DatePicker(props: DatePickerProps) {
  const [visible, setVisible] = useState(false);
  // control calendar panel update.
  const [calendarDate, setCalendarDate] = useState<DateType>({
    year: 0,
    month: 0,
    day: 0,
    dateStr: '',
  });

  const [date, setDate] = useState<DateType>({
    year: 0,
    month: 0,
    day: 0,
    dateStr: '',
  });

  const [calendar, setCalendar] = useState<any[][]>([]);
  const isOuterRef = useRef(props?.value !== undefined);

  function changeYear(type: 'add' | 'dec', count: number = 1) {
    setCalendarDate(getChangeDate(calendarDate, count, 'year', type));
  }

  function changeMonth(type: 'add' | 'dec', count: number = 1) {
    setCalendarDate(getChangeDate(calendarDate, count, 'month', type));
  }

  function handleChooseDate(date: DateType) {
    setCalendarDate(date);
    setVisible(false);
    if (isOuterRef.current) {
      props?.onChange?.(dateToMoment(date));
    } else {
      setDate(date);
    }
  }

  useEffect(() => {
    const dateMom = moment(props?.value || undefined);
    const date = momentToDate(dateMom);
    if (isOuterRef.current) {
      setDate(date);
    }
    setCalendarDate(date);
  }, [props?.value]);

  useUpdateEffect(() => {
    setCalendar(createCalendar(calendarDate.year, calendarDate.month));
  }, [calendarDate.year, calendarDate.month]);

  const renderPopupPanel = (
    <div
      className={props?.className}
      style={{ width: 250, background: 'white', fontSize: '0.875em', ...props?.style }}
    >
      <div
        style={{
          borderBottom: '1px solid #e8e8e8',
          display: 'flex',
          justifyContent: 'space-between',
          height: 32,
          padding: '4px 12px',
          userSelect: 'none',
        }}
      >
        <Space size={0} itemStyle={{ height: '100%' }}>
          <div className={iconClass} onClick={() => changeYear('dec')}>
            <DoubleLeftOutlined />
          </div>
          <div className={iconClass} onClick={() => changeMonth('dec')}>
            <LeftOutlined />
          </div>
        </Space>

        <Space size={0} itemClassName={clickableClass}>
          <a>{calendarDate.year}年</a>
          <a>{calendarDate.month}月</a>
        </Space>

        <Space size={0} itemStyle={{ height: '100%' }}>
          <div className={iconClass} onClick={() => changeMonth('add')}>
            <RightOutlined />
          </div>
          <div className={iconClass} onClick={() => changeYear('add')}>
            <DoubleRightOutlined />
          </div>
        </Space>
      </div>
      <div style={{ padding: '4px 8px' }}>
        <Line
          options={['一', '二', '三', '四', '五', '六', '日'].map((name) => {
            return {
              label: name,
              value: name,
            };
          })}
        />
        {calendar.map((options, index) => {
          return (
            <Line
              selectable
              key={index}
              value={date.dateStr}
              options={options}
              onSelect={(_, item) => {
                if (!item?.date) return;
                handleChooseDate({
                  year: item.date.year,
                  month: item.date.month,
                  day: item.date.day,
                  dateStr: item.date.dateStr,
                });
              }}
            />
          );
        })}
      </div>
      <div className={todayClass}>
        <span
          className={todayTextClass}
          onClick={() => {
            handleChooseDate(momentToDate(moment()));
          }}
        >
          今天
        </span>
      </div>
    </div>
  );

  return (
    <DropDown
      open={visible}
      popupPanel={renderPopupPanel}
      onOpenChange={(open) => {
        setVisible(open);
      }}
    >
      <div
        className={css({
          fontSize: '0.875em',
          border: '1px solid #e8e8e8',
          padding: '6px 12px',
          cursor: 'pointer',
          width: 100,
        })}
      >
        {date.dateStr || <span style={{ color: '#c4c4c4' }}>请选择</span>}
      </div>
    </DropDown>
  );
}
