import * as React from 'react';
import { Pagination, PaginationProps } from '..';
import classNames from 'classnames';
import { useStyle } from './style';

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
  /**
   * @description 是否显示边框
   * @default false
   */
  bordered?: boolean;
  /**
   * @description 列表列配置
   */
  columns?: Column[];
  /**
   * @description 列表数据项
   */
  dataSource?: any[];
  /**
   * @description 每一列的key
   * @default key
   */
  rowKey?: string;
  /**
   * @description 样式
   */
  style?: React.CSSProperties;
  /**
   * @description 分页配置
   */
  pagination?: PaginationProps;
}

export default function Table(props: TableProps) {
  const { columns = [], dataSource = [], rowKey = 'key', pagination = {} } = props;
  const style = useStyle('table');

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
      <table className={classNames(style.table(), props?.bordered && style.tableBordered())}>
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
