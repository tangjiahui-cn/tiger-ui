/**
 * datepicker line.
 *
 * @author tangjiahui
 * @date 2024/2/29
 */
import Item, { ItemProps, ItemValue } from './Item';
import classNames from 'classnames';
import './index.less';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';

Line.Item = Item;

export interface DatePickerLineOptionProps {
  label: React.ReactNode;
  value: ItemValue;
  date?: {
    isToday: boolean;
    isCurrentMonth: boolean;
    isCurrentYear: boolean;
    dateStr: string;
    year: number;
    month: number;
    day: number;
  };
}

type Props = {
  value?: string;
  options?: DatePickerLineOptionProps[];
  onSelect?: (value: ItemValue, option: DatePickerLineOptionProps) => void;
  onEnterItem?: (value: ItemValue, option: DatePickerLineOptionProps) => void;
  onLeaveItem?: (value: ItemValue, option: DatePickerLineOptionProps) => void;
} & Pick<ItemProps, 'selectable'>;

export default function Line(props: Props) {
  const options = props?.options || [];
  const prefix = usePrefix('datepickerLine');

  return (
    <div className={prefix}>
      {options.map((option: DatePickerLineOptionProps) => {
        const isNotCurrentMonth = option.hasOwnProperty('date') && !option?.date?.isCurrentMonth;
        const isSelect = option?.date?.isCurrentMonth && option.value === props?.value;
        return (
          <Item
            isSelect={isSelect}
            selectable={props?.selectable}
            innerClassName={
              option?.date?.isCurrentMonth && option?.date?.isToday && !isSelect
                ? `${prefix}-border`
                : undefined
            }
            key={option.value}
            style={{ height: 32 }}
            className={classNames(isNotCurrentMonth && `${prefix}-gray`)}
            onClick={() => {
              props?.onSelect?.(option?.value, option);
            }}
            onMouseEnter={() => {
              props?.onEnterItem?.(option?.value, option);
            }}
            onMouseLeave={() => {
              props?.onLeaveItem?.(option?.value, option);
            }}
          >
            {option?.label}
          </Item>
        );
      })}
    </div>
  );
}
