import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { DatePicker } from '../../packages';
import Space from '@/Space';
import TimePicker from '@/TimePicker';
import moment, { Moment } from 'moment';

function App() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<any>('');

  const [value, setValue] = useState<Moment | null | undefined>(null);

  return (
    <Space
      style={{
        padding: 16,
      }}
    >
      {/*<DatePickerOld />*/}
      <DatePicker />
      {/*<DatePicker value={moment()} />*/}
      {/*<DatePicker value={value} onChange={(value) => setValue(value)} />*/}
      {/*<Select*/}
      {/*  options={Array(100).fill(100).map((_, index) => {*/}
      {/*    return {*/}
      {/*      label: index,*/}
      {/*      value: `${index}`*/}
      {/*    }*/}
      {/*  })}*/}
      {/*/>*/}
      {/*<TimePicker />*/}
      {/*<TimePicker type={type} />*/}
      {/*<Select*/}
      {/*  value={type}*/}
      {/*  onChange={(type) => setType(type)}*/}
      {/*  options={[*/}
      {/*    { label: 'hour', value: 'hour' },*/}
      {/*    { label: 'minute', value: 'minute' },*/}
      {/*    { label: 'second', value: 'second' },*/}
      {/*  ]}*/}
      {/*/>*/}
    </Space>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
