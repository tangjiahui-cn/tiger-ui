import * as React from 'react';
import { Pagination, PaginationProps } from '..';
import classNames from 'classnames';
import './table.less';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import { DOMAttributes, ForwardedRef, RefAttributes } from 'react';
import { omit } from '@/_utils/object';

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
   * @description 分页配置
   */
  pagination?: PaginationProps;
  /**
   * @description 样式
   */
  style?: React.CSSProperties;
  /**
   * className
   */
  className?: string;
}
export type BaseTablePropsKeys = keyof BaseTableProps;
export type TableProps = BaseTableProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

const privateKeys: BaseTablePropsKeys[] = [
  'bordered',
  'columns',
  'dataSource',
  'rowKey',
  'pagination',
  'style',
  'className',
];

export type TableFC = React.ForwardRefExoticComponent<TableProps>;
const Table: TableFC = React.forwardRef(function (
  props: TableProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { columns = [], dataSource = [], rowKey = 'key', pagination = {} } = props;

  const prefix = usePrefix('table');
  const originProps: DOMAttributes<HTMLDivElement> = omit(props, privateKeys);

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
    <div {...originProps} ref={ref} style={props?.style} className={props?.className}>
      <table className={classNames(prefix, props?.bordered && `${prefix}-border`)}>
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
