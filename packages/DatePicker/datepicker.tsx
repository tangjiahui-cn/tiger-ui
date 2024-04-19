/**
 * DatePicker
 *
 * @author tangjiahui
 * @date 2024/2/28
 */
import React, {
  DOMAttributes,
  ForwardedRef,
  RefAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import moment, { Moment } from 'moment/moment';
import { dateToMoment, getChangeDate, momentToDate } from '@/DatePicker/utils/dateUtils';
import { useUpdateEffect } from '@/_hooks';
import { createCalendar } from '@/DatePicker/utils/createCalendar';
import classNames from 'classnames';
import Space from '@/Space';
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import Line from '@/DatePicker/components/Line';
import { DropDown } from '@/index';
import { omit } from '@/_utils/object';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import './datepicker.less';

export interface DateType {
  year: number;
  month: number;
  day: number;
  dateStr: string;
}

export interface BaseDatePickerProps {
  /**
   * @description 受控制
   */
  value?: Moment | null;
  /**
   * @description 值回调
   */
  onChange?: (value?: Moment | null) => void;
  /**
   * @description style
   */
  style?: React.CSSProperties;
  /**
   * @description className
   */
  className?: string;
}

export type BaseDatePickerPropsKeys = keyof BaseDatePickerProps;
export type DatePickerProps = BaseDatePickerProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

const privateKeys: BaseDatePickerPropsKeys[] = ['value', 'onChange', 'style', 'className'];

export type DatePickerFC = React.ForwardRefExoticComponent<DatePickerProps>;
const DatePicker: DatePickerFC = React.forwardRef(function (
  props: DatePickerProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const originProps: DOMAttributes<HTMLDivElement> = omit(props, privateKeys);
  const [visible, setVisible] = useState(false);
  const prefix = usePrefix('datepicker');
  const panelPrefix = `${prefix}Panel`;

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
      {...originProps}
      className={classNames(props?.className, panelPrefix)}
      style={props?.style}
      ref={ref}
    >
      <div className={`${panelPrefix}-head`}>
        <Space size={0} itemStyle={{ height: '100%' }}>
          <div className={`${panelPrefix}-head-icon`} onClick={() => changeYear('dec')}>
            <DoubleLeftOutlined />
          </div>
          <div className={`${panelPrefix}-head-icon`} onClick={() => changeMonth('dec')}>
            <LeftOutlined />
          </div>
        </Space>

        <Space size={0} itemClassName={`${panelPrefix}-clickable`}>
          <a>{calendarDate.year}年</a>
          <a>{calendarDate.month}月</a>
        </Space>

        <Space size={0} itemStyle={{ height: '100%' }}>
          <div className={`${panelPrefix}-head-icon`} onClick={() => changeMonth('add')}>
            <RightOutlined />
          </div>
          <div className={`${panelPrefix}-head-icon`} onClick={() => changeYear('add')}>
            <DoubleRightOutlined />
          </div>
        </Space>
      </div>
      <div className={`${panelPrefix}-body`}>
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
      <div className={`${panelPrefix}-footer`}>
        <span onClick={() => handleChooseDate(momentToDate(moment()))}>今天</span>
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
      <div className={prefix}>
        {date.dateStr || <span className={`${prefix}-placeholder`}>请选择</span>}
      </div>
    </DropDown>
  );
});

export default DatePicker;
