---
nav: 组件
---

## 一、基本使用
```jsx
import {TimePicker} from 'tiger-ui';

export default () => {
  return <TimePicker />;
}
```

## 二、受控值

```jsx
import {TimePicker} from 'tiger-ui';
import moment from 'moment';

export default () => {
  return <TimePicker value={moment()}/>;
}
```

## 三、默认值
```jsx
import {TimePicker} from 'tiger-ui';
import moment from 'moment';

export default () => {
  return <TimePicker defaultValue={moment()}/>;
}
```

## 四、选择器类型
```jsx
import {TimePicker, Space} from 'tiger-ui';
import moment from 'moment';

export default () => {
  return <Space direction={'vertical'}>
    <Space>hour： <TimePicker picker={'hour'}/></Space>
    <Space>minute： <TimePicker picker={'minute'}/></Space>
    <Space>second： <TimePicker picker={'second'}/></Space>
  </Space>;
}
```
## API
<API id="TimePicker"></API>
