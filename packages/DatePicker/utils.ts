import moment, { Moment } from 'moment/moment';
import { DateItem } from '.';

function doubleNumStr(n: number): string {
  return `${n < 10 ? '0' : ''}${n}`;
}

function createDateItem(day: number, monthMoment: Moment): DateItem {
  const dateStr = monthMoment.format(`YYYY-MM-${doubleNumStr(day)}`);
  return {
    day,
    year: monthMoment.year(),
    month: monthMoment.month() + 1,
    moment: moment(dateStr),
    dateStr,
    key: dateStr,
  };
}

function createDateArrayByMonth(YYYY_MM: string): DateItem[][] {
  const dateArray: DateItem[] = [];
  const currentMonth = moment(YYYY_MM, 'YYYY-MM');
  const currentMonthDays = currentMonth.daysInMonth();
  const startDay = currentMonth.day();
  const startDate = currentMonth.date();

  // pre month
  if (startDay > 1) {
    const preMonth = moment(YYYY_MM, 'YYYY-MM').subtract('1', 'month');
    const preMonthDays = preMonth.daysInMonth();
    for (let day = preMonthDays - startDay + 2; day <= preMonthDays; day++) {
      dateArray.push(createDateItem(day, preMonth));
    }
  }

  // current month
  for (let day = startDate; day <= currentMonthDays; day++) {
    const dateItem = createDateItem(day, currentMonth);
    dateItem._current = true;
    dateArray.push(dateItem);
  }

  // next month
  const total = 6 * 7;
  const nextMonth = moment(YYYY_MM, 'YYYY-MM').add(1, 'month');
  const nextDays = total - dateArray.length;
  for (let day = 1; day <= nextDays; day++) {
    dateArray.push(createDateItem(day, nextMonth));
  }

  return spliceArr(dateArray, 7);
}

function spliceArr(arr: any[], lineSize: number): any[][] {
  const list: any[][] = [];
  let line: any[] = [];
  let startIndex: number = 0;

  while ((line = arr.slice(startIndex, startIndex + lineSize))?.length) {
    startIndex += lineSize;
    list.push(line);
  }

  return list;
}

export { createDateArrayByMonth, doubleNumStr, createDateItem, spliceArr };
