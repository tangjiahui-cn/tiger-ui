import * as React from 'react';
import { Pagination, PaginationProps } from '..';
import classNames from 'classnames';
import './table.less';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import { DOMAttributes, ForwardedRef, RefAttributes } from 'react';

type SingleArgsRender = (item: any) => React.ReactNode;
type DoubleArgsRender = (value: any, item: any) => React.ReactNode;

export interface Column {
  key?: string;
  title?: React.ReactNode;
  dataIndex?: string;
  render?: SingleArgsRender | DoubleArgsRender;
  align?: 'left' | 'center' | 'right';
}

export interface BaseTableProps {
  /** if show border */
  bordered?: boolean;
  /** columns */
  columns?: Column[];
  /** datasource */
  dataSource?: any[];
  /** row key */
  rowKey?: string;
  /** pagination */
  pagination?: PaginationProps;
  /** style */
  style?: React.CSSProperties;
  /** className */
  className?: string;
}

export type TableProps = BaseTableProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

export type TableFC = React.ForwardRefExoticComponent<TableProps>;
const Table: TableFC = React.forwardRef(function (
  props: TableProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {
    columns = [],
    dataSource = [],
    rowKey = 'key',
    pagination = {},
    bordered,
    style,
    className,
    ...rest
  } = props;

  const prefix = usePrefix('table');

  function genTableHeader(columns: Column[]): React.ReactNode {
    return (
      <tr>
        {columns.map((column: Column, index: number) => {
          const key = column?.key || column?.dataIndex || index;
          return (
            <th key={key} style={{ textAlign: column.align || 'left' }}>
              {column?.title}
            </th>
          );
        })}
      </tr>
    );
  }

  function genTableBody(columns: Column[], dataSource: any[]): React.ReactNode {
    return dataSource.map((data: any, index: number) => {
      const key = data[rowKey] || index;
      return (
        <tr key={key}>
          {columns.map((column: Column, index: number) => {
            const dataKey = key + (column?.key || column?.dataIndex || index);
            let children: React.ReactNode = null;

            if (column?.render) {
              children = column?.dataIndex
                ? (column.render as DoubleArgsRender)(data[column.dataIndex], data)
                : (column.render as SingleArgsRender)(data);
            } else if (column?.dataIndex) {
              children = data[column.dataIndex];
            }

            return (
              <td key={dataKey} style={{ textAlign: column.align || 'left' }}>
                {children}
              </td>
            );
          })}
        </tr>
      );
    });
  }

  return (
    <div {...rest} ref={ref} style={style} className={className}>
      <table className={classNames(prefix, bordered && `${prefix}-border`)}>
        <thead>{genTableHeader(columns)}</thead>
        <tbody>{genTableBody(columns, dataSource)}</tbody>
      </table>
      <div style={{ overflow: 'hidden' }}>
        <div style={{ float: 'right' }}>
          <Pagination {...pagination} />
        </div>
      </div>
    </div>
  );
});

export default Table;
