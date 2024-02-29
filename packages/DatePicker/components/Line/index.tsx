/**
 * datepicker line.
 *
 * @author tangjiahui
 * @date 2024/2/29
 */
import Item, { ItemProps, ItemValue } from './Item';
import { css } from 'class-css';
import classNames from 'classnames';
Line.Item = Item;

const grayBoxClass = css({
  color: '#c9c9c9',
});

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
  return (
    <div style={{ display: 'flex' }}>
      {options.map((option: DatePickerLineOptionProps) => {
        const isNotCurrentMonth = option.hasOwnProperty('date') && !option?.date?.isCurrentMonth;
        const isSelect = option?.date?.isCurrentMonth && option.value === props?.value;
        return (
          <Item
            isSelect={isSelect}
            selectable={props?.selectable}
            innerClassName={
              option?.date?.isCurrentMonth && option?.date?.isToday && !isSelect
                ? css({
                    border: '1px solid #4e92e8',
                  })
                : undefined
            }
            key={option.value}
            style={{ height: 32 }}
            className={classNames(isNotCurrentMonth && grayBoxClass)}
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
