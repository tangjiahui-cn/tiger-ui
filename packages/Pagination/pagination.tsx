import * as React from 'react';
import { Button, Input, Space } from '../index';
import { SizeType } from '@/_types/common';
import { DOMAttributes, ForwardedRef, RefAttributes, useEffect, useState } from 'react';
import { ButtonType } from '@/Button';
import { omit, range } from '@/_utils';
import { useUpdateEffect } from '@/_hooks';

interface PaginationData {
  id: number | PaginationDataType;
  value?: number | React.ReactNode;
  type?: ButtonType;
}

export interface BasePaginationProps {
  /**
   * @description 分页大小
   */
  size?: SizeType;
  /**
   * @description 是否简洁模式
   */
  mini?: boolean;
  /**
   * @description 受控的当前页
   */
  current?: number;
  /**
   * @description 受控的分页大小
   * @default 10
   */
  pageSize?: number;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 总数
   */
  total?: number;
  /**
   * @description 前一页元素
   */
  prev?: React.ReactNode;
  /**
   * @description 后一页元素
   */
  next?: React.ReactNode;
  /**
   * @description 快速左移元素
   */
  moveLeft?: React.ReactNode;
  /**
   * @description 快速右移元素
   */
  moveRight?: React.ReactNode;
  /**
   * @description 是否显示快速跳转
   * @default true
   */
  showQuickJumper?: boolean;
  /**
   * @description 显示除第一页、最后一页，剩余的展示分页按钮数目
   */
  pureSize?: number;
  /**
   * @description 快速左移页数
   * @default 5
   */
  moveLeftSize?: number;
  /**
   * @description 快速右移页数
   * @default 5
   */
  moveRightSize?: number;
  // TODO: wait 'Select' component finish, then add this prop.
  // showSizeChanger?: boolean;
  /**
   * @description 显示"全部"的内容
   */
  showTotal?: false | ((total?: number, current?: number) => React.ReactNode);
  /**
   * @description 分页修改回调
   */
  onChange?: (current?: number, pageSize?: number) => void;
  /**
   * style
   */
  style?: React.CSSProperties;
  /**
   * className
   */
  className?: string;
}

export type BasePaginationKeys = keyof BasePaginationProps;
export type PaginationProps = BasePaginationProps & RefAttributes<HTMLDivElement>;

const privateKeys: BasePaginationKeys[] = [
  'size',
  'mini',
  'current',
  'pageSize',
  'disabled',
  'total',
  'prev',
  'next',
  'moveLeft',
  'moveRight',
  'showQuickJumper',
  'pureSize',
  'moveLeftSize',
  'moveRightSize',
  'showTotal',
  'onChange',
  'style',
  'className',
];

enum PaginationDataType {
  PREV = '$1',
  NEXT = '$2',
  MOVE_LEFT = '$3',
  MOVE_RIGHT = '$4',
}

const DEFAULT_SIZE: SizeType = 'middle';
const DEFAULT_MOVE_SIZE: number = 5;

export type PaginationFC = React.ForwardRefExoticComponent<PaginationProps>;

const Pagination: PaginationFC = React.forwardRef(function Pagination(
  props: PaginationProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {
    size = DEFAULT_SIZE,
    total = 0,
    current = 1,
    pageSize = 10,
    pureSize = 5,
    moveLeftSize = DEFAULT_MOVE_SIZE,
    moveRightSize = DEFAULT_MOVE_SIZE,
    prev = '<',
    next = '>',
    moveLeft = '<<<',
    moveRight = '>>>',
    showQuickJumper = true,
    showTotal = (total: number) => `总共 ${total} 条记录`,
  } = props;

  const originKeys: DOMAttributes<HTMLDivElement> = omit(props, privateKeys);

  const btnType: ButtonType = props?.mini ? 'text' : 'default';
  const [paginationList, setPaginationList] = useState<PaginationData[]>([]);
  const [pagination, setPagination] = useState<{
    current: number;
    pageSize: number;
    pages: number;
  }>({
    current: 1,
    pageSize: 10,
    pages: 1,
  });

  const [jumpPage, setJumpPage] = useState<string>('');

  function getSlidingWindowBoundary(
    current: number,
    pureSize: number,
    startIndex: number,
    endIndex: number,
  ): [number, number] {
    let windowLeftIndex: number = startIndex;
    let windowRightIndex: number = endIndex;

    const currentIndex = current - 1;
    const half = Math.floor(pureSize / 2);
    const halfLeftIndex = currentIndex - half;
    const halfRightIndex = currentIndex + (pureSize - half) - 1;

    if (halfLeftIndex <= startIndex) {
      // close to left
      windowLeftIndex = startIndex;
      windowRightIndex = pureSize - 1;
    } else if (halfRightIndex >= endIndex) {
      // close to right
      windowRightIndex = endIndex;
      windowLeftIndex = endIndex - pureSize + 1;
    } else {
      // sliding window is middle.
      windowLeftIndex = halfLeftIndex;
      windowRightIndex = halfRightIndex;
    }

    return [windowLeftIndex, windowRightIndex];
  }

  function generatePaginationList(
    current: number,
    pageSize: number,
    pages: number,
    pureSize: number,
  ): PaginationData[] {
    const list: PaginationData[] = [];
    const startIndex: number = 0;
    const endIndex: number = pages - 1;

    // is using sliding window.
    const isUseWindow = pureSize < pages;

    // prev page
    list.push({ id: PaginationDataType.PREV, value: prev });

    if (isUseWindow) {
      const [windowLeftIndex, windowRightIndex] = getSlidingWindowBoundary(
        current,
        pureSize,
        startIndex,
        endIndex,
      );

      // first page
      if (windowLeftIndex > startIndex) {
        list.push({ id: 1, value: 1 });
      }

      // move left
      if (windowLeftIndex > startIndex + 1) {
        list.push({ id: PaginationDataType.MOVE_LEFT, value: moveLeft, type: 'text' });
      }

      // sliding window items.
      for (let i = windowLeftIndex; i <= windowRightIndex; i++) {
        const page = i + 1;
        list.push({ id: page, value: page });
      }

      // move right
      if (windowRightIndex < endIndex - 1) {
        list.push({ id: PaginationDataType.MOVE_RIGHT, value: moveRight, type: 'text' });
      }

      // last page
      if (windowRightIndex < endIndex) {
        list.push({ id: pages, value: pages });
      }
    } else {
      // full page items.
      for (let i = startIndex; i <= endIndex; i++) {
        const page = i + 1;
        list.push({ id: page, value: page });
      }
    }

    // next page.
    list.push({ id: PaginationDataType.NEXT, value: next });
    return list;
  }

  function handleClick(item: PaginationData) {
    let { current } = pagination;
    const pages = Math.ceil(total / pagination.pageSize);

    if (typeof item.id === 'number') {
      current = item.id;
    } else {
      switch (item.id) {
        case PaginationDataType.PREV:
          current = current - 1;
          break;
        case PaginationDataType.NEXT:
          current = current + 1;
          break;
        case PaginationDataType.MOVE_LEFT:
          current = current - moveLeftSize;
          break;
        case PaginationDataType.MOVE_RIGHT:
          current = current + moveRightSize;
          break;
        default:
          break;
      }
    }

    changeCurrent(range(current, 1, pages));
  }

  function changeCurrent(current: number) {
    props?.onChange?.(current, pagination.pageSize);
    if (!props?.current) {
      setPagination({
        ...pagination,
        current,
      });
    }
  }

  const renderJump = (
    <Space>
      跳至
      <Input
        disabled={props?.disabled}
        style={{ width: 70 }}
        maxLength={100}
        value={jumpPage}
        onChange={(e: any) => {
          setJumpPage(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && jumpPage) {
            setJumpPage('');
            const n = Number(jumpPage);
            if (!isNaN(n)) {
              changeCurrent(range(n, 1, pagination.pages));
            }
          }
        }}
      />
      页
    </Space>
  );

  useEffect(() => {
    setPagination({
      current: current || 1,
      pageSize: pageSize || 10,
      pages: Math.ceil(total / pageSize),
    });
  }, [current, pageSize, total]);

  useUpdateEffect(() => {
    const list = generatePaginationList(
      pagination.current,
      pagination.pageSize,
      pagination.pages,
      range(pureSize, 1, pagination.pages),
    );
    setPaginationList(list);
  }, [pagination, pureSize]);

  return total ? (
    <Space
      {...originKeys}
      size={props?.mini ? 4 : 8}
      style={{ padding: 16, ...props?.style }}
      className={props?.className}
      ref={ref}
      block
    >
      {showTotal && (
        <>
          {showTotal?.(total)}
          {total ? ',' : ''}
        </>
      )}
      {total === 0
        ? null
        : paginationList.map((x: any) => {
            const disabled =
              (pagination.current === 1 && x.id === PaginationDataType.PREV) ||
              (pagination.current === pagination.pages && x.id === PaginationDataType.NEXT);
            const focus = pagination.current === x.id;
            return (
              <Button
                key={x?.id}
                disabled={disabled || props?.disabled}
                type={x?.type || btnType}
                size={size}
                focus={focus}
                onClick={() => handleClick(x)}
              >
                {x.value}
              </Button>
            );
          })}
      {total ? showQuickJumper && renderJump : ''}
    </Space>
  ) : (
    <></>
  );
});
export default Pagination;
