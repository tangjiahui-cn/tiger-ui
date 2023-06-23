import * as React from 'react';
import styles from './index.less';
import { Pagination, PaginationProps } from '..';
import classNames from 'classnames';

type SingleArgsRender = (item: any) => React.ReactNode;
type DoubleArgsRender = (value: any, item: any) => React.ReactNode;

export interface Column {
  key?: string;
  title?: React.ReactNode;
  dataIndex?: string;
  render?: SingleArgsRender | DoubleArgsRender;
  align?: 'left' | 'center' | 'right';
}

export interface TableProps {
  // 是否有边框
  bordered?: boolean;
  // 列
  columns?: Column[];
  // 数据项
  dataSource?: any[];
  // 列key
  rowKey?: string;
  // 样式
  style?: React.CSSProperties;
  // 分页
  pagination?: PaginationProps;
}

export default function Table(props: TableProps) {
  const { columns = [], dataSource = [], rowKey = 'key', pagination = {} } = props;

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
    <div style={props?.style}>
      <table className={classNames(styles['table'], props?.bordered && styles['table-bordered'])}>
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
}
