import { DatePicker, Select, Space, TimePicker } from '../../packages';
import React from 'react';

export default function () {
  return (
    <Space style={{ padding: 16 }}>
      <Select
        options={[
          { label: '选项一', value: 1 },
          { label: '选项二', value: 2 },
          { label: '选项三', value: 3 },
        ]}
      />
      <DatePicker />
      <TimePicker />
    </Space>
  );
}
