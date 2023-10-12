import React, { useEffect, useState } from 'react';
import { Table, Space } from '../../packages';

export default function () {
  const [dataSource, setDataSource] = useState<any[]>([
    { id: '1', name: '唐某人', sex: '男', idCard: '11', address: '浙江省杭州市', study: '本科' },
    { id: '2', name: '唐某人', sex: '男', idCard: '22', address: '浙江省杭州市', study: '本科' },
  ]);

  const columns: any[] = [
    { title: '姓名', dataIndex: 'name' },
    { title: '性别', dataIndex: 'sex' },
    {
      title: '身份证号码',
      dataIndex: 'idCard',
      render(value: any, item: any) {
        return value + 'idCard';
      },
      align: 'right',
    },
    { title: '地址', dataIndex: 'address' },
    { title: '学籍', dataIndex: 'study' },
  ];

  useEffect(() => {}, []);

  return (
    <div style={{ padding: 16 }}>
      <Space>
        <Table
          rowKey={'id'}
          columns={columns}
          dataSource={dataSource}
          pagination={{
            total: 100,
          }}
        />

        <Table
          bordered
          rowKey={'id'}
          columns={columns}
          dataSource={dataSource}
          pagination={{
            total: 100,
          }}
        />
      </Space>
    </div>
  );
}
