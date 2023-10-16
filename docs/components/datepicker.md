---
nav: 组件
---

## 一、基本使用
```jsx
import {DatePicker} from 'tiger-ui';

export default () => {
  return <DatePicker />;
}
```

## 二、受控值
```jsx
import {DatePicker} from 'tiger-ui';
import moment from 'moment';

export default () => {
  return (
    <DatePicker
      value={moment()}
    />
  );
}
```

## 三、受控值改变

```jsx
import {DatePicker} from 'tiger-ui';
import moment from 'moment';
import {useState} from 'react';

export default () => {
  const [value, setValue] = useState(moment());
  return (
    <DatePicker
      value={value}
      onChange={(_, value) => setValue(value)}
    />
  );
}
```

## 四、控制时间格式
```jsx
import {DatePicker, Space, Button} from 'tiger-ui';
import moment from 'moment';
import {useState} from 'react';

export default () => {
  const [value, setValue] = useState(moment());
  const [format, setFormat] = useState('YYYY-MM-DD');
  return (
    <Space direction={'vertical'}>
      <Space>
        {
          ['YYYY-MM-DD', 'YYYY-MM', 'YYYY'].map(x => {
            return (
              <Button
                key={x}
                onClick={() => setFormat(x)}
              >
                {x}
              </Button>
            )
          })
        }
      </Space>
      <Space>
        <DatePicker
          value={value}
          format={format}
          onChange={(_, value) => setValue(value)}
        />
        ({format})
      </Space>
    </Space>
  );
}
```

## API
<API id="DatePicker"></API>
