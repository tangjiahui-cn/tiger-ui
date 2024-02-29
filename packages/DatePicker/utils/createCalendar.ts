/**
 * createCalendar
 *
 * @author tangjiahui
 * @date 2024/2/29
 * @description: create a matrix, which has 6 lines, and 7 columns.
 */
import { DatePickerLineOptionProps } from '../components/Line';
import moment, { Moment } from 'moment/moment';
import { doubleString } from '@/_utils';
import { momentToDate } from './dateUtils';

export function createCalendar(year: number, month: number): DatePickerLineOptionProps[][] {
  const list: DatePickerLineOptionProps[][] = [];
  let tempList: DatePickerLineOptionProps[] = [];
  const nowDate = momentToDate(moment());

  const firstDay: Moment = moment(`${year}-${doubleString(month)}`, 'YYYY-MM');
  const days: number = firstDay?.daysInMonth();

  const arrLen: number = 6 * 7;
  const arrLeft: number = firstDay.day() - 1; // from 0
  const arrRight: number = arrLeft + days - 1; //  from 0

  const lastMonth = firstDay.subtract(1, 'month');
  const lastMonthDate = {
    year: lastMonth.year(),
    month: lastMonth.month() + 1,
    day: lastMonth.date(),
    endDay: lastMonth.date() + lastMonth.daysInMonth() - 1,
  };

  const nextMonth = firstDay.add(2, 'month');
  const nextMonthDate = {
    year: nextMonth.year(),
    month: nextMonth.month() + 1,
    day: nextMonth.date(),
    endDay: nextMonth.date() + nextMonth.daysInMonth() - 1,
  };

  for (let i = 0; i < arrLen; i++) {
    let cYear: number = 0;
    let cMonth: number = 0;
    let cDay: number = 0;

    if (i < arrLeft) {
      // last month
      cYear = lastMonthDate.year;
      cMonth = lastMonthDate.month;
      cDay = lastMonthDate.endDay + i - arrLeft + 1;
    } else if (i > arrRight) {
      // next month
      cYear = nextMonthDate.year;
      cMonth = nextMonthDate.month;
      cDay = i - arrRight;
    } else {
      // current month
      cYear = year;
      cMonth = month;
      cDay = i - arrLeft + 1;
    }

    const dateStr = `${cYear}-${doubleString(cMonth)}-${doubleString(cDay)}`;
    tempList.push({
      label: cDay,
      value: dateStr,
      date: {
        isToday: nowDate.dateStr === dateStr,
        isCurrentMonth: cMonth === month,
        isCurrentYear: cYear === year,
        dateStr,
        year: cYear,
        month: cMonth,
        day: cDay,
      },
    });

    if (tempList.length > 6) {
      list.push(tempList);
      tempList = [];
    }
  }

  if (tempList.length) {
    list.push(tempList);
  }

  return list;
}
