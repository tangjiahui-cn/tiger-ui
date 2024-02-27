/**
 * TimePicker
 *
 * @author tangjiahui
 * @date 2024/2/23
 */
import { Button, DropDown } from '@/index';
import SelectBar from './components/SelectBar';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import moment, { Moment } from 'moment';
import { doubleString, isEmpty } from '@/_utils';
import cloneDeep from 'lodash/cloneDeep';
import useToken from '@/_utils/hooks/useToken';
import { useUpdateEffect } from '@/_hooks';
import { useStyle } from './style';

function isArrayHasEmpty(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    if (isEmpty(arr[i])) {
      return true;
    }
  }
  return false;
}

function ArrayToString(arr: number[], split: string = ':') {
  return arr.reduce((res, cur, index) => {
    return `${res}${index == 0 ? '' : split}${doubleString(cur)}`;
  }, '');
}

export type TimeType = 'hour' | 'minute' | 'second';

const FORMAT = {
  hour: 'HH:mm:ss',
  minute: 'mm:ss',
  second: 'ss',
};

type TimeData = {
  type: TimeType;
  value?: number;
  visible: boolean;
};

const getHour = (now: Moment) => Number(now.format('HH'));
const getMinute = (now: Moment) => Number(now.format('mm'));
const getSecond = (now: Moment) => Number(now.format('ss'));
const getValue = (now: Moment, type: TimeType) => {
  switch (type) {
    case 'hour':
      return getHour(now);
    case 'minute':
      return getMinute(now);
    case 'second':
      return getSecond(now);
  }
};

export interface TimePickerProps {
  /**
   * @description 受控值
   */
  value?: Moment;
  /**
   * @description 类型
   * @default hour
   */
  type?: TimeType;
  /**
   * @description 占位符
   * @default 请输入
   */
  placeholder?: React.ReactNode;
  /**
   * @description 切换回调
   */
  onChange?: (value?: Moment) => void;
}

export default function TimePicker(props: TimePickerProps) {
  const style = useStyle('timepicker');
  const types: TimeType[] = useMemo(() => {
    switch (props?.type) {
      case 'second':
        return ['second'];
      case 'minute':
        return ['minute', 'second'];
      case 'hour':
      default:
        return ['hour', 'minute', 'second'];
    }
  }, [props?.type]);

  const token = useToken();

  const isOuter = useRef(props?.value !== undefined);
  const [visible, setVisible] = useState(false);

  const [data, setData] = useState<TimeData[]>([]);
  const [dataCopy, setDataCopy] = useState<TimeData[]>([]);
  const displayText: string = useMemo(() => {
    const values: any[] = data?.filter((x) => x?.visible).map((x) => x?.value);
    const isNull = isArrayHasEmpty(values);
    return isNull || isNull === undefined ? '' : ArrayToString(values as any);
  }, [data]);

  function handleNow() {
    const now = moment();
    const target: TimeData[] = data.map((x) => {
      return {
        ...x,
        value: getValue(now, x.type),
      };
    });
    emitChangeData(target);
    if (!isOuter.current) {
      updateData(target);
    }
    setVisible(false);
  }

  function handleOk() {
    setDataCopy(cloneDeep(data));
    setVisible(false);
  }

  function formatData(data: TimeData[]) {
    return data.map((x) => {
      return {
        ...x,
        value: isEmpty(x?.value) ? 0 : x?.value,
      };
    });
  }

  function emitChangeData(data: TimeData[]) {
    const type = types?.length === 3 ? 'hour' : types?.length === 2 ? 'minute' : 'second';
    const result: any[] = data.map((x) => x?.value);
    const isNull = isArrayHasEmpty(result);

    props?.onChange?.(isNull ? undefined : moment(ArrayToString(result as any), FORMAT[type]));
  }

  function updateData(data: TimeData[]) {
    setData(data);
    setDataCopy(cloneDeep(data));
  }

  useEffect(() => {
    if (!isOuter?.current) {
      updateData(
        types.map((type) => {
          return {
            type,
            value: undefined,
            visible: types.includes(type),
          };
        }),
      );
    }
  }, []);

  useEffect(() => {
    if (isOuter?.current) {
      if (props?.value && props?.value instanceof moment) {
        const data: TimeData[] = types.map((type) => {
          return {
            type,
            visible: types.includes(type),
            value: getValue(props.value as Moment, type),
          };
        });
        updateData(data);
      }
    }
  }, [props?.value]);

  useUpdateEffect(() => {
    updateData(
      data.map((x) => {
        return {
          ...x,
          visible: types.includes(x?.type),
        };
      }),
    );
  }, [JSON.stringify(types)]);

  return (
    <DropDown
      open={visible}
      onOpenChange={(visible) => {
        setVisible(visible);
        if (!visible) {
          setData(cloneDeep(dataCopy));
        }
      }}
      popupPanel={
        <div className={style.timepicker()}>
          <div className={style.timepickerBody()}>
            {data
              .filter((x) => {
                return x?.visible;
              })
              .map((x: TimeData, index) => {
                const isLast = index === data.length - 1;
                return (
                  <SelectBar
                    end={x.type === 'hour' ? 23 : 59}
                    key={index}
                    value={x.value}
                    onChange={(value) => {
                      x.value = value;

                      const target: TimeData[] = formatData(data);
                      emitChangeData(target);
                      if (!isOuter.current) {
                        setData(target);
                      }
                    }}
                    style={{
                      width: 60,
                      borderRight: !isLast ? '1px solid #e8e8e8' : 'none',
                    }}
                  />
                );
              })}
          </div>
          <div className={style.timepickerBottom()}>
            <a className={style.timepickerBottomNow()} onClick={handleNow}>
              此刻
            </a>
            <Button type={'primary'} size={'small'} onClick={handleOk}>
              确定
            </Button>
          </div>
        </div>
      }
    >
      <div tabIndex={0} className={style.timepickerPlaceholder()}>
        {displayText || (
          <span className={style.timepickerPlaceholderTip()}>{props?.placeholder || '请选择'}</span>
        )}
      </div>
    </DropDown>
  );
}
