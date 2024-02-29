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
      onChange={(value) => setValue(value)}
    />
  );
}
```

## API
<API id="DatePicker"></API>
