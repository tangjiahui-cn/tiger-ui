import moment, { Moment } from 'moment/moment';
import { doubleString } from '@/_utils';
import { DateType } from '../DatePicker';

export function dateToMoment(date: DateType): Moment {
  return moment(`${date.year}-${doubleString(date.month)}-${doubleString(date.day)}`, 'YYYY-MM-DD');
}

export function momentToDate(mom: Moment): DateType {
  return {
    year: mom.year(),
    month: mom.month() + 1,
    day: mom.date(),
    dateStr: mom.format('YYYY-MM-DD'),
  };
}

export function getChangeDate(
  date: DateType,
  count: number,
  dateType: 'year' | 'month' | 'day',
  type: 'add' | 'dec',
): DateType {
  const isAdd = type === 'add';
  const origin = dateToMoment(date);
  return momentToDate(isAdd ? origin.add(count, dateType) : origin.subtract(count, dateType));
}
